import { Configuration } from '../../domain/entities/configuration.entity';
import { FeatureFlag } from '../../domain/entities/feature-flag.entity';
import { ConfigurationScope } from '../../domain/value-objects/configuration-scope.vo';

export interface IConfigurationRepository {
  findByKeyAndScopes(
    key: string,
    scopes: Array<{ scope: ConfigurationScope; scopeId: string }>,
  ): Promise<Configuration[]>;
  save(configuration: Configuration): Promise<void>;
  delete(id: string): Promise<void>;
}

export interface IFeatureFlagRepository {
  findByKeyAndScopes(
    key: string,
    scopes: Array<{ scope: ConfigurationScope; scopeId: string }>,
  ): Promise<FeatureFlag[]>;
  save(flag: FeatureFlag): Promise<void>;
}
