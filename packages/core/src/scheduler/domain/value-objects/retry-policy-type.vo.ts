export enum RetryPolicyType {
  NONE = 'NONE',
  IMMEDIATE = 'IMMEDIATE',
  LINEAR = 'LINEAR',
  EXPONENTIAL = 'EXPONENTIAL',
  CUSTOM = 'CUSTOM',
}

export class RetryPolicy {
  constructor(
    public readonly type: RetryPolicyType,
    public readonly maxAttempts: number = 0,
    public readonly backoffMs: number = 0,
    public readonly backoffMultiplier: number = 1,
  ) {}
}
