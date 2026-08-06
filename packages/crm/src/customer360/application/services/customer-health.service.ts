import { Customer360 } from '../../domain/entities/customer360.entity';
import { CustomerHealth } from '../../domain/value-objects/customer-health.vo';

export class CustomerHealthService {
  updateHealth(customer: Customer360, health: CustomerHealth): void {
    customer.health = health;
  }
}
