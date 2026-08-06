import { ICRMRepository } from '../../application/interfaces/i-crm.repository';

export class MemoryCRMRepository implements ICRMRepository {
  private data = new Map<string, Record<string, unknown>>();

  async findById(tenantId: string): Promise<Record<string, unknown> | null> {
    return this.data.get(tenantId) || null;
  }

  async save(data: Record<string, unknown>): Promise<void> {
    const tenantId = data.tenantId as string;
    if (tenantId) {
      this.data.set(tenantId, data);
    }
  }
}
