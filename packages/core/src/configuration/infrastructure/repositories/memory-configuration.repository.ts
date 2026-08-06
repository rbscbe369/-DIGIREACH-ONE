import {
  IConfigurationRepository,
  IFeatureFlagRepository,
} from '../../../configuration/application/interfaces/i-configuration.repository';
import { Configuration } from '../../../configuration/domain/entities/configuration.entity';
import { FeatureFlag } from '../../../configuration/domain/entities/feature-flag.entity';
import { ConfigurationScope } from '../../../configuration/domain/value-objects/configuration-scope.vo';

export class MemoryConfigurationRepository implements IConfigurationRepository {
  private configs = new Map<string, Configuration>();

  async findByKeyAndScopes(
    key: string,
    scopes: Array<{ scope: ConfigurationScope; scopeId: string }>,
  ): Promise<Configuration[]> {
    const results: Configuration[] = [];
    for (const config of this.configs.values()) {
      if (config.key.value === key) {
        const matchesScope = scopes.some(
          (s) => s.scope === config.scope && s.scopeId === config.scopeId,
        );
        if (matchesScope) results.push(config);
      }
    }
    return results;
  }

  async save(configuration: Configuration): Promise<void> {
    this.configs.set(configuration.id, configuration);
  }

  async delete(id: string): Promise<void> {
    this.configs.delete(id);
  }
}

export class MemoryFeatureFlagRepository implements IFeatureFlagRepository {
  private flags = new Map<string, FeatureFlag>();

  async findByKeyAndScopes(
    key: string,
    scopes: Array<{ scope: ConfigurationScope; scopeId: string }>,
  ): Promise<FeatureFlag[]> {
    const results: FeatureFlag[] = [];
    for (const flag of this.flags.values()) {
      if (flag.key.value === key) {
        const matchesScope = scopes.some(
          (s) => s.scope === flag.scope && s.scopeId === flag.scopeId,
        );
        if (matchesScope) results.push(flag);
      }
    }
    return results;
  }

  async save(flag: FeatureFlag): Promise<void> {
    this.flags.set(flag.id, flag);
  }
}
