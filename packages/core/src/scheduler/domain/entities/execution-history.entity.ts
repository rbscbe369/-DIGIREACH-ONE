import { ExecutionResult } from '../value-objects/execution-result.vo';
import { ObservabilityMetadata } from '../value-objects/observability-metadata.vo';

export class ExecutionHistory {
  constructor(
    public readonly id: string,
    public readonly registrationId: string,
    public readonly definitionId: string,
    public readonly executedAt: Date,
    public readonly result: ExecutionResult,
    public readonly observability: ObservabilityMetadata,
  ) {}
}
