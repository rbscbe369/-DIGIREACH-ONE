import { ICustomer360Repository } from '../../application/interfaces/i-customer360.repository';
import { Customer360 } from '../../domain/entities/customer360.entity';

export class MemoryCustomer360Repository implements ICustomer360Repository {
  private records = new Map<string, Customer360>();

  async findById(id: string): Promise<Customer360 | null> {
    return this.records.get(id) || null;
  }

  async save(customer: Customer360): Promise<void> {
    this.records.set(customer.id, customer);
  }

  async delete(id: string): Promise<void> {
    this.records.delete(id);
  }
}
