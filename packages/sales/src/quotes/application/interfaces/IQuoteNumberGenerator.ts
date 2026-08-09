export interface IQuoteNumberGenerator {
  generate(tenantId: string | null): Promise<string>;
}
