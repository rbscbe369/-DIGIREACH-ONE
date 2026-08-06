import { IBusinessContextProvider } from '../../application/context/interfaces/i-business-context.provider';
import { ExecutionContext } from '../../domain/context/entities/execution-context.entity';

export class BusinessContextProvider implements IBusinessContextProvider {
  private currentContext: ExecutionContext | null = null;

  getExecutionContext(): ExecutionContext | null {
    // In a real framework this would use AsyncLocalStorage
    return this.currentContext;
  }

  setExecutionContext(context: ExecutionContext): void {
    this.currentContext = context;
  }
}
