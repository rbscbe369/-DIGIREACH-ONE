import { IUnitOfWork } from '../../application/interfaces/IUnitOfWork';
import { ITransactionContext } from '../../application/interfaces/ITransactionContext';
import { MemoryTransactionContext } from './MemoryTransactionContext';

export class MemoryUnitOfWork implements IUnitOfWork {
  async execute<T>(work: (tx: ITransactionContext) => Promise<T>): Promise<T> {
    const tx = new MemoryTransactionContext(Math.random().toString(36).substring(7));
    try {
      const result = await work(tx);
      await tx.commit();
      return result;
    } catch (error) {
      await tx.rollback();
      throw error;
    }
  }
}
