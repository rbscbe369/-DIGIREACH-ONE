import { IContextCache } from '../../application/context/interfaces/i-context.cache';
import { BusinessContext } from '../../domain/context/entities/business-context.entity';

export class MemoryContextCache implements IContextCache {
  private cache = new Map<string, { data: BusinessContext; expiresAt: number }>();

  async get(contextId: string): Promise<BusinessContext | null> {
    const entry = this.cache.get(contextId);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(contextId);
      return null;
    }
    return entry.data;
  }

  async set(contextId: string, context: BusinessContext, ttlSeconds: number = 3600): Promise<void> {
    this.cache.set(contextId, {
      data: context,
      expiresAt: Date.now() + ttlSeconds * 1000,
    });
  }

  async invalidate(contextId: string): Promise<void> {
    this.cache.delete(contextId);
  }
}
