import { RuleAction } from '../value-objects/rule-action.vo';
import { RuleOperator } from '../value-objects/rule-operator.vo';

export class DecisionTableRow {
  constructor(
    public readonly conditions: Record<string, { operator: RuleOperator; value: unknown }>,
    public readonly actions: RuleAction[],
  ) {}
}

export class DecisionTable {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly inputFields: string[],
    public readonly rows: DecisionTableRow[],
    public readonly hitPolicy: 'UNIQUE' | 'FIRST' | 'ANY' | 'COLLECT',
  ) {}
}
