export interface IMemoryConfigurationCache {
  get(key: string): Promise<unknown | null>;
  set(key: string, value: unknown, ttlSeconds?: number): Promise<void>;
  invalidate(key: string): Promise<void>;
}
