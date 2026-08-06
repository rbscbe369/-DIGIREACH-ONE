import { RuleType } from '../value-objects/rule-type.vo';
import { RulePriority } from '../value-objects/rule-priority.vo';
import { RuleExpression } from './rule-expression.entity';
import { RuleAction } from '../value-objects/rule-action.vo';

export class Rule {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: RuleType,
    public readonly priority: RulePriority,
    public readonly rootExpression: RuleExpression,
    public readonly onPassActions: RuleAction[] = [],
    public readonly onFailActions: RuleAction[] = [],
  ) {}
}
