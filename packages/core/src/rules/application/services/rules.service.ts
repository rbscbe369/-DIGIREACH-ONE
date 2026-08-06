import { EvaluateRuleSetUseCase } from '../use-cases/rules.use-cases';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';
import { RuleResult } from '../../domain/value-objects/rule-result.vo';

export class RuleService {
  constructor(private readonly evaluateRuleSetUseCase: EvaluateRuleSetUseCase) {}

  async evaluateRuleSet(
    ruleSetId: string,
    versionId: string,
    context: RuleContext,
  ): Promise<RuleResult> {
    return this.evaluateRuleSetUseCase.execute(ruleSetId, versionId, context);
  }
}
