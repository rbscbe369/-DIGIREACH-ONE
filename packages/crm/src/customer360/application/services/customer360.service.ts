import { ICustomer360Repository } from '../interfaces/i-customer360.repository';
import { Customer360 } from '../../domain/entities/customer360.entity';

export class Customer360Service {
  constructor(private readonly repo: ICustomer360Repository) {}

  async getCustomer(id: string): Promise<Customer360 | null> {
    return this.repo.findById(id);
  }

  async saveCustomer(customer: Customer360): Promise<void> {
    await this.repo.save(customer);
  }
}
