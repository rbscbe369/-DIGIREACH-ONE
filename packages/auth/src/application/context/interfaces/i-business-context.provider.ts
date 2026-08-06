import { ExecutionContext } from '../../../domain/context/entities/execution-context.entity';

export interface IBusinessContextProvider {
  getExecutionContext(): ExecutionContext | null;
  setExecutionContext(context: ExecutionContext): void;
}
