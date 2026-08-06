import { BusinessContextResolver } from './business-context.resolver';
import { IContextCache } from '../interfaces/i-context.cache';

export class BusinessContextService {
  constructor(
    private readonly resolver: BusinessContextResolver,
    private readonly cache: IContextCache,
  ) {}

  async resolveAndCache(
    userId: string,
  ): Promise<import('../../../domain/context/entities/business-context.entity').BusinessContext> {
    const context = await this.resolver.resolveDefaultContext(userId);
    await this.cache.set(context.contextId, context, 3600);
    return context;
  }
}
