import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';
import { Contract } from '../entities/Contract.entity';

export class ContractEvents {
  static createEvent(
    type: string,
    contract: Contract,
    payloadOverrides: Record<string, unknown> = {},
    correlationId?: string,
    causationId?: string,
  ): OutboxMessage {
    const payload = {
      contractId: contract.contractId,
      contractNumber: contract.contractNumber,
      tenantId: contract.tenantId,
      organizationId: contract.organizationId,
      status: contract.status,
      currency: contract.totals?.totalOneTimeValue.currencyCode || 'USD',
      totalOneTimeValueMinorUnits: contract.totals?.totalOneTimeValue.minorUnits || 0,
      totalRecurringValueMinorUnits: contract.totals?.totalRecurringValue.minorUnits || 0,
      recurrencePeriod: contract.totals?.recurrencePeriod || 'None',
      ...payloadOverrides,
    };

    return new OutboxMessage(
      Math.random().toString(36).substring(2, 15),
      Math.random().toString(36).substring(2, 15),
      type,
      contract.contractId,
      'Contract',
      JSON.stringify(payload),
      null,
      correlationId || null,
      causationId || null,
      contract.tenantId,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
  }

  static contractCreated(contract: Contract) {
    return this.createEvent('ContractCreated', contract);
  }

  static contractApproved(contract: Contract) {
    return this.createEvent('ContractApproved', contract);
  }

  static contractActivated(contract: Contract) {
    return this.createEvent('ContractActivated', contract);
  }

  static contractSuspended(contract: Contract) {
    return this.createEvent('ContractSuspended', contract);
  }

  static contractResumed(contract: Contract) {
    return this.createEvent('ContractResumed', contract);
  }

  static contractTerminated(contract: Contract) {
    return this.createEvent('ContractTerminated', contract);
  }

  static contractCancelled(contract: Contract) {
    return this.createEvent('ContractCancelled', contract);
  }

  static contractExpired(contract: Contract) {
    return this.createEvent('ContractExpired', contract);
  }

  static contractRenewed(contract: Contract) {
    return this.createEvent('ContractRenewed', contract);
  }

  static contractVersionCreated(contract: Contract, version: number) {
    return this.createEvent('ContractVersionCreated', contract, { version });
  }
}
