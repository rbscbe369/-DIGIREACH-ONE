import { ExecutionContext } from '../../domain/value-objects/execution-context.vo';

export interface IExecutionContextProvider {
  get(): Promise<ExecutionContext>;
}
