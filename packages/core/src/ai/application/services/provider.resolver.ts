import { IAIProviderRegistry } from '../interfaces/i-ai-provider-registry';
import { IAIProvider } from '../interfaces/i-ai-provider';
import { AIPolicy } from '../../domain/value-objects/ai-policy.vo';

export class ProviderResolver {
  constructor(private readonly registry: IAIProviderRegistry) {}

  resolve(policy: AIPolicy): IAIProvider {
    // Scaffold: Pick the first allowed provider from policy that is registered
    for (const providerId of policy.allowedProviders) {
      const provider = this.registry.getProvider(providerId);
      if (provider) {
        return provider;
      }
    }

    throw new Error('No valid AI provider found for the given policy');
  }
}
