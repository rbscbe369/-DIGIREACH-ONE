import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class AIContext {
  constructor(
    public readonly executionContext: ExecutionContext,
    public readonly workflowContext: Record<string, unknown> | null,
    public readonly ruleContext: Record<string, unknown> | null,
    public readonly businessContext: Record<string, unknown> | null,
    public readonly correlationId: string,
    public readonly traceId: string,
    public readonly conversationId: string | null,
  ) {}
}
