import { ITransactionContext } from '../../application/interfaces/ITransactionContext';

export class MemoryTransactionContext implements ITransactionContext {
  public isCommitted = false;
  public isRolledBack = false;

  constructor(public readonly transactionId: string) {}

  async commit(): Promise<void> {
    if (this.isRolledBack) throw new Error('Cannot commit a rolled back transaction');
    this.isCommitted = true;
  }

  async rollback(): Promise<void> {
    if (this.isCommitted) throw new Error('Cannot rollback a committed transaction');
    this.isRolledBack = true;
  }
}
