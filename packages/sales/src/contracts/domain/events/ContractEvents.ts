import { OutboxMessage, OutboxMessageStatus } from '@digireach-one/core';

export class ContractEvents {
  static createEvent(
    type: string,
    contractId: string,
    tenantId: string,
    payload: Record<string, unknown>,
    correlationId?: string,
    causationId?: string,
  ): OutboxMessage {
    return new OutboxMessage(
      Math.random().toString(36).substring(2, 15),
      Math.random().toString(36).substring(2, 15),
      type,
      contractId,
      'Contract',
      JSON.stringify(payload),
      null,
      correlationId || null,
      causationId || null,
      tenantId,
      new Date(),
      new Date(),
      OutboxMessageStatus.Pending,
      0,
      null,
      null,
      null,
    );
  }

  static contractCreated(contractId: string, tenantId: string) {
    return this.createEvent('ContractCreated', contractId, tenantId, { contractId });
  }

  static contractApproved(contractId: string, tenantId: string) {
    return this.createEvent('ContractApproved', contractId, tenantId, { contractId });
  }

  static contractActivated(contractId: string, tenantId: string) {
    return this.createEvent('ContractActivated', contractId, tenantId, { contractId });
  }

  static contractSuspended(contractId: string, tenantId: string) {
    return this.createEvent('ContractSuspended', contractId, tenantId, { contractId });
  }

  static contractResumed(contractId: string, tenantId: string) {
    return this.createEvent('ContractResumed', contractId, tenantId, { contractId });
  }

  static contractTerminated(contractId: string, tenantId: string) {
    return this.createEvent('ContractTerminated', contractId, tenantId, { contractId });
  }

  static contractCancelled(contractId: string, tenantId: string) {
    return this.createEvent('ContractCancelled', contractId, tenantId, { contractId });
  }

  static contractExpired(contractId: string, tenantId: string) {
    return this.createEvent('ContractExpired', contractId, tenantId, { contractId });
  }

  static contractRenewed(contractId: string, tenantId: string) {
    return this.createEvent('ContractRenewed', contractId, tenantId, { contractId });
  }

  static contractVersionCreated(contractId: string, version: number, tenantId: string) {
    return this.createEvent('ContractVersionCreated', contractId, tenantId, {
      contractId,
      version,
    });
  }
}
