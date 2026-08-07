import { IOrderNumberGenerator } from '../../application/interfaces/IOrderNumberGenerator';

export class MemoryOrderNumberGenerator implements IOrderNumberGenerator {
  private counter = 0;

  public async generate(tenantId: string): Promise<string> {
    this.counter++;
    return `ORD-${tenantId}-${this.counter.toString().padStart(6, '0')}`;
  }
}
