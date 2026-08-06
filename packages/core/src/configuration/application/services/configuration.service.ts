import { ConfigurationResolver } from './configuration.resolver';
import { IExecutionContextProvider } from '../interfaces/i-execution-context.provider';

export class ConfigurationService {
  constructor(
    private readonly resolver: ConfigurationResolver,
    private readonly contextProvider: IExecutionContextProvider,
  ) {}

  async resolve<T>(key: string): Promise<T | null> {
    const context = await this.contextProvider.get();
    return (await this.resolver.resolveEffective(key, context)) as T | null;
  }
}
