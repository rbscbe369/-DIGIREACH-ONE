import { BusinessContext } from './business-context.entity';

export class ExecutionContext {
  private history: BusinessContext[] = [];

  constructor(
    public readonly traceId: string,
    public readonly requestId: string,
    public activeContext: BusinessContext,
    private readonly maxHistorySize: number = 5,
  ) {
    this.history.push(activeContext);
  }

  switchContext(newContext: BusinessContext) {
    if (this.history.length >= this.maxHistorySize) {
      this.history.shift();
    }
    this.activeContext = newContext;
    this.history.push(newContext);
  }

  getHistory(): ReadonlyArray<BusinessContext> {
    return Object.freeze([...this.history]);
  }
}
