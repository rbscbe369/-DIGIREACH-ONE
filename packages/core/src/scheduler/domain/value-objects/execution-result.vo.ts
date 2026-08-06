export enum ExecutionState {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  SKIPPED = 'SKIPPED',
  RETRYING = 'RETRYING',
}

export class ExecutionResult {
  constructor(
    public readonly state: ExecutionState,
    public readonly reason: string | null = null,
    public readonly nextRetryAt: Date | null = null,
  ) {}
}
