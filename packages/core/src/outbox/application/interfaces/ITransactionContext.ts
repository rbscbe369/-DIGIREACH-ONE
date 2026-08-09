export interface ITransactionContext {
  readonly transactionId: string;
  commit(): Promise<void>;
  rollback(): Promise<void>;
}
