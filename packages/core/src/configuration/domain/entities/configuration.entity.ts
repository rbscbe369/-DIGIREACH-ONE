import { ConfigurationKey, ConfigurationValue } from '../value-objects/configuration-key-value.vo';
import { ConfigurationCategory } from '../value-objects/configuration-category.vo';
import { ConfigurationScope } from '../value-objects/configuration-scope.vo';

export class Configuration {
  constructor(
    public readonly id: string,
    public readonly key: ConfigurationKey,
    public readonly value: ConfigurationValue,
    public readonly category: ConfigurationCategory,
    public readonly scope: ConfigurationScope,
    public readonly scopeId: string, // e.g. the actual userId or organizationId
    public readonly description: string | null,
    public readonly isActive: boolean,
  ) {}
}
