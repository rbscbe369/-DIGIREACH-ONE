export enum VariableScope {
  GLOBAL = 'GLOBAL',
  INSTANCE = 'INSTANCE',
  STEP = 'STEP',
  OUTPUT = 'OUTPUT',
}

export class WorkflowVariable {
  constructor(
    public readonly name: string,
    public readonly scope: VariableScope,
    public readonly value: unknown,
    public readonly type: 'string' | 'number' | 'boolean' | 'object' | 'array',
  ) {}
}
