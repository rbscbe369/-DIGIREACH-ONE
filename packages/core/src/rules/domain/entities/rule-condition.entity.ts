import { RuleOperator } from '../value-objects/rule-operator.vo';

export class RuleCondition {
  constructor(
    public readonly id: string,
    public readonly field: string,
    public readonly operator: RuleOperator,
    public readonly expectedValue: unknown,
  ) {}
}
