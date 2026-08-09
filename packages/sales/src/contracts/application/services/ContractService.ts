import { Contract } from '../../domain/entities/Contract.entity';
import { ContractStatus } from '../../domain/value-objects/ContractStatus.vo';
import { ContractTerm } from '../../domain/value-objects/ContractTerm.vo';
import { RenewalPolicy } from '../../domain/value-objects/RenewalPolicy.vo';
import { IContractRepository } from '../interfaces/IContractRepository';
import { IContractNumberGenerator } from '../interfaces/IContractNumberGenerator';
import { IUnitOfWork } from '@digireach-one/core';
import { ContractEvents } from '../../domain/events/ContractEvents';

export class ContractService {
  constructor(
    private readonly repository: IContractRepository,
    private readonly numberGenerator: IContractNumberGenerator,
    private readonly uow: IUnitOfWork,
  ) {}

  async createContract(
    tenantId: string,
    organizationId: string,
    term: ContractTerm,
    renewalPolicy: RenewalPolicy,
    slas: string[],
    originatingOrderId: string | null = null,
    originatingQuoteId: string | null = null,
  ): Promise<Contract> {
    return this.uow.execute(async (_ctx) => {
      const contractId = Math.random().toString(36).substring(2, 15);
      const contractNumber = await this.numberGenerator.generate(tenantId);

      const contract = new Contract(
        contractId,
        contractNumber,
        tenantId,
        organizationId,
        ContractStatus.Draft,
        term,
        renewalPolicy,
        0,
        originatingOrderId,
        originatingQuoteId,
        slas,
        new Date(),
        new Date(),
      );

      const events = contract.clearPendingEvents();
      events.push(ContractEvents.contractCreated(contractId, tenantId));

      await this.repository.save(contract);
      return contract;
    });
  }

  async activateContract(contractId: string, tenantId: string): Promise<void> {
    return this.uow.execute(async (_ctx) => {
      const contract = await this.repository.findById(contractId, tenantId);
      if (!contract) throw new Error('Contract not found');

      if (contract.currentVersion === 0) {
        contract.createSnapshotVersion();
      }

      contract.transitionTo(ContractStatus.Active);
      await this.repository.save(contract);
      contract.clearPendingEvents();
    });
  }

  async suspendContract(contractId: string, tenantId: string): Promise<void> {
    return this.uow.execute(async (_ctx) => {
      const contract = await this.repository.findById(contractId, tenantId);
      if (!contract) throw new Error('Contract not found');
      contract.transitionTo(ContractStatus.Suspended);
      await this.repository.save(contract);
      contract.clearPendingEvents();
    });
  }

  async resumeContract(contractId: string, tenantId: string): Promise<void> {
    return this.uow.execute(async (_ctx) => {
      const contract = await this.repository.findById(contractId, tenantId);
      if (!contract) throw new Error('Contract not found');
      contract.transitionTo(ContractStatus.Active);
      await this.repository.save(contract);
      const events = contract.clearPendingEvents();
      events.push(ContractEvents.contractResumed(contractId, tenantId));
    });
  }

  async terminateContract(contractId: string, tenantId: string): Promise<void> {
    return this.uow.execute(async (_ctx) => {
      const contract = await this.repository.findById(contractId, tenantId);
      if (!contract) throw new Error('Contract not found');
      contract.transitionTo(ContractStatus.Terminated);
      await this.repository.save(contract);
      contract.clearPendingEvents();
    });
  }

  async renewContract(contractId: string, tenantId: string): Promise<void> {
    return this.uow.execute(async (_ctx) => {
      const contract = await this.repository.findById(contractId, tenantId);
      if (!contract) throw new Error('Contract not found');
      contract.renew();
      await this.repository.save(contract);
      contract.clearPendingEvents();
    });
  }
}
