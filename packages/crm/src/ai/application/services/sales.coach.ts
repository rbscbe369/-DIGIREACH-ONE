import { SalesCoaching } from '../../domain/value-objects/sales-coaching.vo';
export class SalesCoach {
  coach(_data: unknown): SalesCoaching {
    return new SalesCoaching('Feedback', []);
  }
}
