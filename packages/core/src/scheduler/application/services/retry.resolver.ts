import { RetryPolicy, RetryPolicyType } from '../../domain/value-objects/retry-policy-type.vo';

export class RetryResolver {
  static calculateNextRetry(
    policy: RetryPolicy,
    currentAttempt: number,
    lastExecutionTime: Date,
  ): Date | null {
    if (currentAttempt >= policy.maxAttempts || policy.type === RetryPolicyType.NONE) {
      return null;
    }

    const nextTime = new Date(lastExecutionTime.getTime());

    if (policy.type === RetryPolicyType.IMMEDIATE) {
      return nextTime;
    }

    if (policy.type === RetryPolicyType.LINEAR) {
      nextTime.setMilliseconds(nextTime.getMilliseconds() + policy.backoffMs);
      return nextTime;
    }

    if (policy.type === RetryPolicyType.EXPONENTIAL) {
      const exponentialDelay =
        policy.backoffMs * Math.pow(policy.backoffMultiplier, currentAttempt);
      nextTime.setMilliseconds(nextTime.getMilliseconds() + exponentialDelay);
      return nextTime;
    }

    return null;
  }
}
