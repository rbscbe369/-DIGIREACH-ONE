import { WorkflowTransition } from '../../domain/entities/workflow-transition.entity';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';
import { ConditionEvaluator } from './condition.evaluator';

export class TransitionResolver {
  static evaluateTransitions(
    transitions: WorkflowTransition[],
    context: WorkflowContext,
  ): WorkflowTransition[] {
    return transitions.filter((transition) => {
      if (!transition.rule) {
        return true;
      }

      if (transition.rule.evaluateAll) {
        return ConditionEvaluator.evaluateAll(transition.rule.conditions, context);
      } else {
        return transition.rule.conditions.some((c) => ConditionEvaluator.evaluate(c, context));
      }
    });
  }
}
