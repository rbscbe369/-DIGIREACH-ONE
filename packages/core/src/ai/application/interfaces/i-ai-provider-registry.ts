import { IAIProvider } from './i-ai-provider';
import { AIProvider } from '../../domain/value-objects/ai-provider.vo';

export interface IAIProviderRegistry {
  registerProvider(providerInfo: AIProvider, providerImpl: IAIProvider): void;
  getProvider(providerId: string): IAIProvider | null;
  getProviderInfo(providerId: string): AIProvider | null;
}
