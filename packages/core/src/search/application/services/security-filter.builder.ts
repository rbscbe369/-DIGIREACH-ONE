import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { SearchFilter, FilterOperator } from '../../domain/value-objects/search-filter.vo';

export class SecurityFilterBuilder {
  static buildSecurityFilters(context: ExecutionContext): SearchFilter[] {
    const filters: SearchFilter[] = [];

    if (context.organizationId) {
      filters.push(
        new SearchFilter('organizationId', FilterOperator.EQUALS, context.organizationId),
      );
    }

    if (context.roleIds.length > 0) {
      filters.push(new SearchFilter('allowedRoleIds', FilterOperator.IN, context.roleIds));
    }

    if (context.userId) {
      filters.push(new SearchFilter('allowedUserIds', FilterOperator.IN, [context.userId]));
    }

    return filters;
  }
}
