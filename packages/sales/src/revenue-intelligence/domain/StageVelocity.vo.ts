export class StageVelocity {
  public readonly averageDurationMs: number | null;

  constructor(
    public readonly stage: string,
    public readonly transitionCount: number,
    public readonly totalDurationMs: number,
  ) {
    if (this.transitionCount === 0) {
      this.averageDurationMs = null;
    } else {
      this.averageDurationMs = Math.round(this.totalDurationMs / this.transitionCount);
    }
  }
}
