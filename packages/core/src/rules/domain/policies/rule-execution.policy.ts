import { RuleContext } from '../value-objects/rule-context.vo';
import { RuleVariable } from '../value-objects/rule-variable.vo';

export class RuleExecutionPolicy {
  static validateContext(context: RuleContext, requiredVariables: RuleVariable[]): void {
    const missing = requiredVariables
      .filter((v) => v.type === 'INPUT')
      .filter((v) => !context.variables.has(v.name));

    if (missing.length > 0) {
      throw new Error(`Missing required input variables: ${missing.map((m) => m.name).join(', ')}`);
    }
  }
}
