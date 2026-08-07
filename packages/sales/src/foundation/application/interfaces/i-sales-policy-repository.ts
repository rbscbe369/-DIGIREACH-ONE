import { SalesPolicy } from '../../domain/value-objects/sales-policy.vo';
export interface ISalesPolicyRepository {
  getPolicy(): Promise<SalesPolicy | null>;
}
