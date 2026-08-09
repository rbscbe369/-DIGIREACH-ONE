import { ITransactionContext } from './ITransactionContext';

export interface IUnitOfWork {
  execute<T>(work: (tx: ITransactionContext) => Promise<T>): Promise<T>;
}
