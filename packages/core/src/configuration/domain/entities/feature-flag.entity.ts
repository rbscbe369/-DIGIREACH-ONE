import { ConfigurationKey } from '../value-objects/configuration-key-value.vo';
import { ConfigurationScope } from '../value-objects/configuration-scope.vo';
import { FeatureFlagRule } from '../value-objects/feature-flag-rule.vo';

export class FeatureFlag {
  constructor(
    public readonly id: string,
    public readonly key: ConfigurationKey,
    public readonly isGlobalEnabled: boolean,
    public readonly scope: ConfigurationScope,
    public readonly scopeId: string,
    public readonly rules: FeatureFlagRule[],
    public readonly percentageRollout: number | null, // 0-100 placeholder
  ) {}
}
