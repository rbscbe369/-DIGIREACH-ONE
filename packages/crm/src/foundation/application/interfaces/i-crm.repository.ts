export interface ICRMRepository {
  findById(tenantId: string): Promise<Record<string, unknown> | null>;
  save(data: Record<string, unknown>): Promise<void>;
}
