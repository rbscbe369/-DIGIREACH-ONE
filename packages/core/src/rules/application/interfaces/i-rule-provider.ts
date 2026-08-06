import { RuleSet } from '../../domain/entities/rule-set.entity';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';
import { RuleResult } from '../../domain/value-objects/rule-result.vo';

export interface IRuleProvider {
  evaluateRuleSet(ruleSet: RuleSet, versionId: string, context: RuleContext): Promise<RuleResult>;
}
