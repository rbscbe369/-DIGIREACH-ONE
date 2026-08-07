import { PricingContext } from '../../domain/value-objects/PricingContext.vo';
import { PricingEvaluationResult } from '../../domain/value-objects/PricingEvaluationResult.vo';
import { PricingRule } from '../../domain/entities/PricingRule.entity';
import { IPricingRuleSetRepository } from '../interfaces/IPricingRuleSetRepository';
import { AmbiguousPricingConflictError } from '../../domain/errors/AmbiguousPricingConflictError';

export class PricingRuleEvaluator {
  constructor(private readonly repository: IPricingRuleSetRepository) {}

  public async evaluate(context: PricingContext): Promise<PricingEvaluationResult> {
    const allRuleSets = await this.repository.findAll();
    
    // Find all eligible rules from active rule sets
    const candidateRules: { ruleSetPriority: number, ruleSetId: string, rule: PricingRule }[] = [];
    
    for (const rs of allRuleSets) {
      const eligible = rs.getEligibleRules(context);
      for (const r of eligible) {
        candidateRules.push({ ruleSetPriority: rs.priority, ruleSetId: rs.ruleSetId, rule: r });
      }
    }

    if (candidateRules.length === 0) {
      // No rules apply, return base price
      return new PricingEvaluationResult(
        context.basePrice,
        context.basePrice,
        0,
        context.currency,
        [],
        [],
        new Date(),
        ['No applicable rules found. Using base price.']
      );
    }

    // Sort deterministically:
    // 1. RuleSet priority
    // 2. Rule priority
    // 3. Specificity
    // 4. Effective date (newer first)
    // 5. Stable ID fallback
    candidateRules.sort((a, b) => {
      if (a.ruleSetPriority !== b.ruleSetPriority) return b.ruleSetPriority - a.ruleSetPriority;
      if (a.rule.priority !== b.rule.priority) return b.rule.priority - a.rule.priority;
      
      const aSpec = a.rule.getSpecificity();
      const bSpec = b.rule.getSpecificity();
      if (aSpec !== bSpec) return bSpec - aSpec;
      
      const aTime = a.rule.validFrom ? a.rule.validFrom.getTime() : 0;
      const bTime = b.rule.validFrom ? b.rule.validFrom.getTime() : 0;
      if (aTime !== bTime) return bTime - aTime;
      
      return a.rule.ruleId.localeCompare(b.rule.ruleId);
    });

    // Check for ambiguous conflict
    // If top two rules have exactly same precedence factors up to the ID fallback, we must abort if they result in different prices.
    if (candidateRules.length > 1) {
      const first = candidateRules[0];
      const second = candidateRules[1];
      
      const samePriority = first!.ruleSetPriority === second!.ruleSetPriority && first!.rule.priority === second!.rule.priority;
      const sameSpec = first!.rule.getSpecificity() === second!.rule.getSpecificity();
      const aTime = first!.rule.validFrom ? first!.rule.validFrom.getTime() : 0;
      const bTime = second!.rule.validFrom ? second!.rule.validFrom.getTime() : 0;
      const sameTime = aTime === bTime;
      
      if (samePriority && sameSpec && sameTime) {
         // evaluate to see if they conflict
         const val1 = first!.rule.applyTo(context.basePrice);
         const val2 = second!.rule.applyTo(context.basePrice);
         if (val1 !== val2) {
           throw new AmbiguousPricingConflictError(`Ambiguous conflict between ${first!.rule.ruleId} and ${second!.rule.ruleId}`);
         }
      }
    }

    // Apply the winning rule
    const winningCandidate = candidateRules[0]!;
    const finalPrice = winningCandidate.rule.applyTo(context.basePrice);
    const adjustments = finalPrice - context.basePrice;
    
    return new PricingEvaluationResult(
      context.basePrice,
      finalPrice,
      adjustments,
      context.currency,
      [winningCandidate.rule.ruleId],
      [winningCandidate.ruleSetId],
      new Date(),
      [`Applied rule ${winningCandidate.rule.ruleId} from ruleset ${winningCandidate.ruleSetId}`]
    );
  }
}
