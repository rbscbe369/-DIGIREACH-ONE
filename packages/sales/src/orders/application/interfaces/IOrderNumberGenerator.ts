export interface IOrderNumberGenerator {
  generate(tenantId: string): Promise<string>;
}
