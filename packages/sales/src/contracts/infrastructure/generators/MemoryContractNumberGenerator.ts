import { IContractNumberGenerator } from '../../application/interfaces/IContractNumberGenerator';

export class MemoryContractNumberGenerator implements IContractNumberGenerator {
  private counter = 0;

  async generate(tenantId: string): Promise<string> {
    this.counter++;
    return `CTR-${tenantId}-${this.counter.toString().padStart(6, '0')}`;
  }
}
