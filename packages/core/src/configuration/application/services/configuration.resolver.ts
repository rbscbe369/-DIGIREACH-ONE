import { IConfigurationRepository } from '../interfaces/i-configuration.repository';
import { ExecutionContext } from '../../domain/value-objects/execution-context.vo';
import { ConfigurationScope } from '../../domain/value-objects/configuration-scope.vo';
import { ConfigurationHierarchy } from '../../domain/value-objects/configuration-hierarchy.vo';

export class ConfigurationResolver {
  constructor(private readonly repo: IConfigurationRepository) {}

  async resolveEffective(key: string, context: ExecutionContext): Promise<unknown | null> {
    const scopes = this.buildScopeChain(context);
    const configs = await this.repo.findByKeyAndScopes(key, scopes);

    // Find the most specific configuration (first match in the resolution chain)
    for (const scopeType of ConfigurationHierarchy.RESOLUTION_CHAIN) {
      const match = configs.find((c) => c.scope === scopeType);
      if (match) return match.value.value;
    }

    return null;
  }

  private buildScopeChain(
    context: ExecutionContext,
  ): Array<{ scope: ConfigurationScope; scopeId: string }> {
    const chain: Array<{ scope: ConfigurationScope; scopeId: string }> = [];
    if (context.userId) chain.push({ scope: ConfigurationScope.USER, scopeId: context.userId });
    if (context.teamId) chain.push({ scope: ConfigurationScope.TEAM, scopeId: context.teamId });
    if (context.departmentId)
      chain.push({ scope: ConfigurationScope.DEPARTMENT, scopeId: context.departmentId });
    if (context.branchId)
      chain.push({ scope: ConfigurationScope.BRANCH, scopeId: context.branchId });
    if (context.regionId)
      chain.push({ scope: ConfigurationScope.REGION, scopeId: context.regionId });
    if (context.divisionId)
      chain.push({ scope: ConfigurationScope.DIVISION, scopeId: context.divisionId });
    if (context.businessUnitId)
      chain.push({ scope: ConfigurationScope.BUSINESS_UNIT, scopeId: context.businessUnitId });
    if (context.legalEntityId)
      chain.push({ scope: ConfigurationScope.LEGAL_ENTITY, scopeId: context.legalEntityId });
    if (context.organizationId)
      chain.push({ scope: ConfigurationScope.ORGANIZATION, scopeId: context.organizationId });
    chain.push({ scope: ConfigurationScope.PLATFORM, scopeId: context.platformId });

    return chain;
  }
}
