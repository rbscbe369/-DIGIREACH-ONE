import { IRuleProvider } from '../../application/interfaces/i-rule-provider';
import { RuleSet } from '../../domain/entities/rule-set.entity';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';
import { RuleResult } from '../../domain/value-objects/rule-result.vo';

export class DummyRuleProvider implements IRuleProvider {
  async evaluateRuleSet(
    _ruleSet: RuleSet,
    _versionId: string,
    _context: RuleContext,
  ): Promise<RuleResult> {
    return new RuleResult(true, [], null, {});
  }
}
