import { VariableType } from './rule-variable-type.vo';

export class RuleVariable {
  constructor(
    public readonly name: string,
    public readonly type: VariableType,
    public readonly dataType: 'string' | 'number' | 'boolean' | 'object' | 'array',
    public readonly defaultValue: unknown = null,
  ) {}
}
