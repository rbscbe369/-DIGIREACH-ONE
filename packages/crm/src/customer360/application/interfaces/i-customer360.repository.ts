import { Customer360 } from '../../domain/entities/customer360.entity';

export interface ICustomer360Repository {
  findById(id: string): Promise<Customer360 | null>;
  save(customer: Customer360): Promise<void>;
  delete(id: string): Promise<void>;
}
