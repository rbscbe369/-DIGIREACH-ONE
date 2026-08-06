import { Customer360 } from '../../domain/entities/customer360.entity';
import { CustomerRisk } from '../../domain/value-objects/customer-risk.vo';

export class CustomerRiskService {
  updateRisk(customer: Customer360, risk: CustomerRisk): void {
    customer.risk = risk;
  }
}
