import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { WorkflowVariable } from './workflow-variable.vo';

export class WorkflowContext {
  constructor(
    public readonly executionContext: ExecutionContext,
    public readonly configurationContext: Record<string, unknown>,
    public readonly variables: Map<string, WorkflowVariable>,
    public readonly correlationId: string,
    public readonly traceId: string,
  ) {}
}
