import { RuleCondition } from '../../domain/entities/rule-condition.entity';
import { RuleExpression, LogicalOperator } from '../../domain/entities/rule-expression.entity';
import { RuleOperator } from '../../domain/value-objects/rule-operator.vo';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';

export class RuleEvaluator {
  static evaluateExpression(expression: RuleExpression, context: RuleContext): boolean {
    const evaluateCondition = (cond: RuleCondition): boolean => {
      const actualValue = context.variables.get(cond.field);
      return this.compare(actualValue, cond.operator, cond.expectedValue);
    };

    const conditionResults = expression.conditions.map(evaluateCondition);
    const subResults = expression.subExpressions.map((sub) =>
      this.evaluateExpression(sub, context),
    );

    const allResults = [...conditionResults, ...subResults];

    if (expression.operator === LogicalOperator.AND) {
      return allResults.every((r) => r === true);
    } else if (expression.operator === LogicalOperator.OR) {
      return allResults.some((r) => r === true);
    } else if (expression.operator === LogicalOperator.NOT) {
      return !allResults[0];
    }

    return false;
  }

  private static compare(actual: unknown, operator: RuleOperator, expected: unknown): boolean {
    // Pure metadata-driven comparison, strictly typed, no eval()
    if (actual === undefined || actual === null) {
      return operator === RuleOperator.IS_NULL;
    }

    switch (operator) {
      case RuleOperator.EQUALS:
        return actual === expected;
      case RuleOperator.NOT_EQUALS:
        return actual !== expected;
      case RuleOperator.GREATER_THAN:
        return typeof actual === 'number' && typeof expected === 'number' && actual > expected;
      case RuleOperator.LESS_THAN:
        return typeof actual === 'number' && typeof expected === 'number' && actual < expected;
      case RuleOperator.IN:
        return Array.isArray(expected) && expected.includes(actual);
      case RuleOperator.NOT_IN:
        return Array.isArray(expected) && !expected.includes(actual);
      case RuleOperator.CONTAINS:
        return (
          typeof actual === 'string' && typeof expected === 'string' && actual.includes(expected)
        );
      default:
        return false;
    }
  }
}
