import { RuleAction } from './rule-action.vo';
import { DecisionExplanation } from './decision-explanation.vo';

export class RuleResult {
  constructor(
    public readonly passed: boolean,
    public readonly actions: RuleAction[] = [],
    public readonly explanation: DecisionExplanation | null = null,
    public readonly computedVariables: Record<string, unknown> = {},
  ) {}
}
