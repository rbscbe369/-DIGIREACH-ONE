export class RetryStrategy {
  private readonly maxAttempts = 5;
  private readonly baseDelayMs = 1000;

  public calculateNextAttempt(attemptCount: number, currentTime: Date): Date | null {
    if (attemptCount >= this.maxAttempts) {
      return null; // Stop retrying
    }
    const delayMs = this.baseDelayMs * Math.pow(2, attemptCount - 1);
    return new Date(currentTime.getTime() + delayMs);
  }
}
