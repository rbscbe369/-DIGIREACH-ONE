export interface IContractNumberGenerator {
  generate(tenantId: string): Promise<string>;
}
