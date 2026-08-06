import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class ScheduleContext {
  constructor(
    public readonly executionContext: ExecutionContext,
    public readonly workflowContext: Record<string, unknown> | null,
    public readonly configurationContext: Record<string, unknown>,
    public readonly correlationId: string,
    public readonly traceId: string,
  ) {}
}
