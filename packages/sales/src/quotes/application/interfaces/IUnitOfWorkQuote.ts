export interface IUnitOfWorkQuote {
  execute<T>(work: (tx: unknown) => Promise<T>): Promise<T>;
}
