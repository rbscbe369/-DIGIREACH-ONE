import { ICorrelationProvider } from '../interfaces/ICorrelationProvider';
export class CorrelationContext {
  constructor(private readonly provider: ICorrelationProvider) {}
  get(): string {
    return this.provider.getCorrelationId();
  }
}
