import { IClock } from '../../application/interfaces/i-clock.interface';

export class SystemClock implements IClock {
  now(): Date {
    return new Date();
  }
}
