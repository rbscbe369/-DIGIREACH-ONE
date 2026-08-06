export class FeatureFlagRule {
  constructor(
    public readonly conditions: Array<{
      attribute: string;
      operator: 'in' | 'notIn' | 'equals' | 'notEquals' | 'gt' | 'lt';
      value: unknown;
    }>,
    public readonly isEnabled: boolean,
  ) {}
}
