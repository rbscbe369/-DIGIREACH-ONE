import { ISalesRepository } from '../../application/interfaces/i-sales-repository';
export class MemorySalesRepository implements ISalesRepository {
  async init(): Promise<void> {}
}
