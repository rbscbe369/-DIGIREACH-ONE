import { IClock } from '../interfaces/IClock';
export class ClockService {
  constructor(private readonly provider: IClock) {}
  now(): Date {
    return this.provider.now();
  }
}
