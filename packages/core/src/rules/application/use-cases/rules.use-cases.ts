import { IRuleSetRepository } from '../interfaces/i-rule-set.repository';
import { IRuleHistoryRepository } from '../interfaces/i-rule-history.repository';
import { IRuleEventPublisher } from '../interfaces/i-rule-event.publisher';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';
import { RuleResult } from '../../domain/value-objects/rule-result.vo';
import { RuleEvaluator } from '../services/rule.evaluator';
import { RuleExecutionPolicy } from '../../domain/policies/rule-execution.policy';
import { EvaluationStrategy } from '../../domain/value-objects/rule-evaluation-strategy.vo';
import { RuleExecution } from '../../domain/entities/rule-execution.entity';
import { RuleEvaluatedEvent } from '../../domain/events/rules.events';

export class EvaluateRuleSetUseCase {
  constructor(
    private readonly ruleSetRepo: IRuleSetRepository,
    private readonly historyRepo: IRuleHistoryRepository,
    private readonly eventPublisher: IRuleEventPublisher,
  ) {}

  async execute(ruleSetId: string, versionId: string, context: RuleContext): Promise<RuleResult> {
    const start = Date.now();
    const ruleSet = await this.ruleSetRepo.findById(ruleSetId);
    if (!ruleSet) throw new Error('RuleSet not found');

    const version = ruleSet.versions.find((v) => v.id === versionId);
    if (!version) throw new Error('Version not found');

    RuleExecutionPolicy.validateContext(context, version.variables);

    let finalPassed = false;
    const allActions = [];

    // Simplistic ALL strategy for scaffolding
    const strategy = EvaluationStrategy.ALL;

    if (strategy === EvaluationStrategy.ALL) {
      finalPassed = true;
      for (const rule of version.rules) {
        const passed = RuleEvaluator.evaluateExpression(rule.rootExpression, context);
        if (!passed) {
          finalPassed = false;
          allActions.push(...rule.onFailActions);
          break;
        } else {
          allActions.push(...rule.onPassActions);
        }
      }
    }

    const result = new RuleResult(finalPassed, allActions, null, {});
    const executionId = Date.now().toString();
    const duration = Date.now() - start;

    const execution = new RuleExecution(
      executionId,
      ruleSetId,
      versionId,
      context.correlationId,
      result,
      duration,
      new Date(),
    );
    await this.historyRepo.saveExecution(execution);
    await this.eventPublisher.publish(new RuleEvaluatedEvent(executionId));

    return result;
  }
}
