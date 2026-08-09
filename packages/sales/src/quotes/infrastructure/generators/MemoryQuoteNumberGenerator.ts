import { IQuoteNumberGenerator } from '../../application/interfaces/IQuoteNumberGenerator';

export class MemoryQuoteNumberGenerator implements IQuoteNumberGenerator {
  private counter = 0;

  public async generate(tenantId: string | null): Promise<string> {
    this.counter++;
    const prefix = tenantId ? `${tenantId}-` : 'QT-';
    return `${prefix}${this.counter.toString().padStart(6, '0')}`;
  }
}
