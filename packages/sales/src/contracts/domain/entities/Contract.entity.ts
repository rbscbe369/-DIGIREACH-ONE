import { ContractStatus } from '../value-objects/ContractStatus.vo';
import { ContractTerm } from '../value-objects/ContractTerm.vo';
import { RenewalPolicy, RenewalType } from '../value-objects/RenewalPolicy.vo';
import { ContractVersion } from './ContractVersion.entity';
import { ContractLine } from './ContractLine.entity';
import { InvalidContractTransitionError } from '../errors/InvalidContractTransitionError';
import { OutboxMessage } from '@digireach-one/core';
import { ContractEvents } from '../events/ContractEvents';
import { ContractTotals } from '../value-objects/ContractTotals.vo';
import { Money } from '@digireach-one/shared-kernel';

export class Contract {
  private versions: Map<number, ContractVersion> = new Map();
  private currentLines: Map<string, ContractLine> = new Map();
  private pendingEvents: OutboxMessage[] = [];
  public totals: ContractTotals | null = null;

  constructor(
    public readonly contractId: string,
    public readonly contractNumber: string,
    public readonly tenantId: string,
    public readonly organizationId: string,
    public status: ContractStatus,
    public currentTerm: ContractTerm,
    public currentRenewalPolicy: RenewalPolicy,
    public currentVersion: number,
    public originatingOrderId: string | null,
    public originatingQuoteId: string | null,
    public slas: string[],
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  public getLines(): ContractLine[] {
    return Array.from(this.currentLines.values());
  }

  public addLine(line: ContractLine): void {
    if (this.status !== ContractStatus.Draft && this.status !== ContractStatus.PendingApproval) {
      throw new InvalidContractTransitionError(
        'Can only modify lines on Draft or Pending contracts',
      );
    }
    this.currentLines.set(line.lineId, line);
    this.recalculateTotals();
    this.updatedAt = new Date();
  }

  private recalculateTotals(): void {
    const lines = this.getLines();
    if (lines.length === 0) return;

    const currencyCode = lines[0]!.unitValue.currencyCode;
    let oneTime = Money.fromMinorUnits(0, currencyCode);
    let recurring = Money.fromMinorUnits(0, currencyCode);
    let recurrencePeriod: 'Monthly' | 'Annual' | 'None' = 'None';

    for (const line of lines) {
      if (line.unitValue.currencyCode !== currencyCode) {
        throw new Error('All contract lines must have the same currency.');
      }
      if (line.isRecurring) {
        recurring = recurring.add(line.lineTotal);
        recurrencePeriod = line.recurrencePeriod;
      } else {
        oneTime = oneTime.add(line.lineTotal);
      }
    }
    this.totals = new ContractTotals(oneTime, recurring, recurrencePeriod);
  }

  public clearPendingEvents(): OutboxMessage[] {
    const events = [...this.pendingEvents];
    this.pendingEvents = [];
    return events;
  }

  private addEvent(event: OutboxMessage) {
    this.pendingEvents.push(event);
  }

  public transitionTo(newStatus: ContractStatus): void {
    const allowed: Record<string, string[]> = {
      [ContractStatus.Draft]: [ContractStatus.PendingApproval, ContractStatus.Cancelled],
      [ContractStatus.PendingApproval]: [
        ContractStatus.Approved,
        ContractStatus.Draft,
        ContractStatus.Cancelled,
      ],
      [ContractStatus.Approved]: [ContractStatus.Active, ContractStatus.Cancelled],
      [ContractStatus.Active]: [
        ContractStatus.Suspended,
        ContractStatus.Expired,
        ContractStatus.Terminated,
      ],
      [ContractStatus.Suspended]: [ContractStatus.Active, ContractStatus.Terminated],
      [ContractStatus.Expired]: [],
      [ContractStatus.Terminated]: [],
      [ContractStatus.Cancelled]: [],
    };

    const validTransitions = allowed[this.status] || [];
    if (!validTransitions.includes(newStatus)) {
      throw new InvalidContractTransitionError(
        `Cannot transition from ${this.status} to ${newStatus}`,
      );
    }

    this.status = newStatus;
    this.updatedAt = new Date();

    if (newStatus === ContractStatus.Approved) {
      this.addEvent(ContractEvents.contractApproved(this));
    } else if (newStatus === ContractStatus.Active) {
      this.addEvent(ContractEvents.contractActivated(this));
    } else if (newStatus === ContractStatus.Suspended) {
      this.addEvent(ContractEvents.contractSuspended(this));
    } else if (newStatus === ContractStatus.Terminated) {
      this.addEvent(ContractEvents.contractTerminated(this));
    } else if (newStatus === ContractStatus.Cancelled) {
      this.addEvent(ContractEvents.contractCancelled(this));
    } else if (newStatus === ContractStatus.Expired) {
      this.addEvent(ContractEvents.contractExpired(this));
    }
  }

  public renew(): void {
    if (this.status !== ContractStatus.Active) {
      throw new InvalidContractTransitionError('Can only renew an Active contract');
    }
    if (this.currentRenewalPolicy.type === RenewalType.None) {
      throw new InvalidContractTransitionError('Contract does not support renewal');
    }

    // In a full implementation, this would calculate the new end date based on term months
    // For now, we simulate renewal by creating a new version.
    this.createSnapshotVersion();
    this.updatedAt = new Date();
    this.addEvent(ContractEvents.contractRenewed(this));
  }

  public createSnapshotVersion(): void {
    const nextVersion = this.currentVersion + 1;
    const snapshot = new ContractVersion(
      this.contractId,
      nextVersion,
      this.currentTerm,
      this.currentRenewalPolicy,
      this.getLines(),
      [...this.slas],
      this.originatingOrderId,
      this.originatingQuoteId,
      new Date(),
    );
    this.versions.set(nextVersion, snapshot);
    this.currentVersion = nextVersion;
    this.updatedAt = new Date();
    this.addEvent(ContractEvents.contractVersionCreated(this, nextVersion));
  }

  public getVersion(versionNumber: number): ContractVersion | undefined {
    return this.versions.get(versionNumber);
  }
}
