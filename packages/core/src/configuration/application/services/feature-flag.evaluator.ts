import { IFeatureFlagRepository } from '../interfaces/i-configuration.repository';
import { ExecutionContext } from '../../domain/value-objects/execution-context.vo';
import { ConfigurationScope } from '../../domain/value-objects/configuration-scope.vo';
import { ConfigurationHierarchy } from '../../domain/value-objects/configuration-hierarchy.vo';

export class FeatureFlagEvaluator {
  constructor(private readonly repo: IFeatureFlagRepository) {}

  async isEnabled(key: string, context: ExecutionContext): Promise<boolean> {
    const scopes = this.buildScopeChain(context);
    const flags = await this.repo.findByKeyAndScopes(key, scopes);

    for (const scopeType of ConfigurationHierarchy.RESOLUTION_CHAIN) {
      const match = flags.find((f) => f.scope === scopeType);
      if (match) {
        if (!match.isGlobalEnabled) return false;
        if (match.rules.length === 0) return true;
        // Basic evaluation placeholder
        for (const rule of match.rules) {
          if (!rule.isEnabled) return false;
        }
        return true;
      }
    }
    return false;
  }

  private buildScopeChain(
    context: ExecutionContext,
  ): Array<{ scope: ConfigurationScope; scopeId: string }> {
    const chain: Array<{ scope: ConfigurationScope; scopeId: string }> = [];
    if (context.userId) chain.push({ scope: ConfigurationScope.USER, scopeId: context.userId });
    if (context.organizationId)
      chain.push({ scope: ConfigurationScope.ORGANIZATION, scopeId: context.organizationId });
    chain.push({ scope: ConfigurationScope.PLATFORM, scopeId: context.platformId });
    return chain;
  }
}
