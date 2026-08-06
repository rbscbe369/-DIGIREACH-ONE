import { Customer360 } from '../../domain/entities/customer360.entity';

export class CustomerResolver {
  static resolve(data: unknown): Customer360 {
    return data as Customer360;
  }
}
