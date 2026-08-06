export enum RetryStrategy {
  IMMEDIATE = 'IMMEDIATE',
  LINEAR = 'LINEAR',
  EXPONENTIAL = 'EXPONENTIAL',
  SCHEDULED = 'SCHEDULED',
  DEAD_LETTER_QUEUE = 'DEAD_LETTER_QUEUE',
}

export class RetryPolicy {
  constructor(
    public readonly strategy: RetryStrategy,
    public readonly maxAttempts: number,
    public readonly baseDelayMs: number,
  ) {}
}
