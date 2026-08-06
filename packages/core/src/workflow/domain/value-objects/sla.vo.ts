export class SLA {
  constructor(
    public readonly expectedDurationMs: number,
    public readonly breachThresholdMs: number,
    public readonly warningThresholdMs: number,
  ) {}
}
