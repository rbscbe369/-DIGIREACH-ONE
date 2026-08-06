import { DecisionTable } from '../../domain/entities/decision-table.entity';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';
import { RuleAction } from '../../domain/value-objects/rule-action.vo';
import { RuleOperator } from '../../domain/value-objects/rule-operator.vo';

export class DecisionTableEvaluator {
  static evaluate(table: DecisionTable, context: RuleContext): RuleAction[] {
    const matchedActions: RuleAction[] = [];

    for (const row of table.rows) {
      let rowMatches = true;

      for (const field of table.inputFields) {
        const condition = row.conditions[field];
        if (!condition) continue; // Any value matches

        const actualValue = context.variables.get(field);
        if (!this.compare(actualValue, condition.operator, condition.value)) {
          rowMatches = false;
          break;
        }
      }

      if (rowMatches) {
        matchedActions.push(...row.actions);
        if (table.hitPolicy === 'FIRST' || table.hitPolicy === 'UNIQUE') {
          break;
        }
      }
    }

    return matchedActions;
  }

  private static compare(actual: unknown, operator: RuleOperator, expected: unknown): boolean {
    if (operator === RuleOperator.EQUALS) return actual === expected;
    if (operator === RuleOperator.GREATER_THAN)
      return typeof actual === 'number' && typeof expected === 'number' && actual > expected;
    return false; // Simplified for the scaffold
  }
}
