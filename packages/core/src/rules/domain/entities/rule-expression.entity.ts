import { RuleCondition } from './rule-condition.entity';

export enum LogicalOperator {
  AND = 'AND',
  OR = 'OR',
  NOT = 'NOT',
}

export class RuleExpression {
  constructor(
    public readonly id: string,
    public readonly operator: LogicalOperator,
    public readonly conditions: RuleCondition[] = [],
    public readonly subExpressions: RuleExpression[] = [],
  ) {}
}
