import { BusinessContext } from '../../../domain/context/entities/business-context.entity';

export interface IContextCache {
  get(contextId: string): Promise<BusinessContext | null>;
  set(contextId: string, context: BusinessContext, ttlSeconds?: number): Promise<void>;
  invalidate(contextId: string): Promise<void>;
}
