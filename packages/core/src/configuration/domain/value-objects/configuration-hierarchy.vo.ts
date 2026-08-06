import { ConfigurationScope } from './configuration-scope.vo';

export class ConfigurationHierarchy {
  static readonly RESOLUTION_CHAIN = [
    ConfigurationScope.USER,
    ConfigurationScope.TEAM,
    ConfigurationScope.DEPARTMENT,
    ConfigurationScope.BRANCH,
    ConfigurationScope.REGION,
    ConfigurationScope.DIVISION,
    ConfigurationScope.BUSINESS_UNIT,
    ConfigurationScope.LEGAL_ENTITY,
    ConfigurationScope.ORGANIZATION,
    ConfigurationScope.PLATFORM,
  ];
}
