import { AIContext } from '../../domain/value-objects/ai-context.vo';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class ContextAssembler {
  static assemble(
    execContext: ExecutionContext,
    workflowContext: Record<string, unknown> | null,
    correlationId: string,
    traceId: string,
    conversationId: string | null = null,
  ): AIContext {
    return new AIContext(
      execContext,
      workflowContext,
      null,
      null,
      correlationId,
      traceId,
      conversationId,
    );
  }
}
