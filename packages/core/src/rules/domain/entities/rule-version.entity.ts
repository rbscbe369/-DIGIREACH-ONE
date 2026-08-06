import { Rule } from './rule.entity';
import { DecisionTable } from './decision-table.entity';
import { RuleVariable } from '../value-objects/rule-variable.vo';

export class RuleVersion {
  constructor(
    public readonly id: string,
    public readonly ruleSetId: string,
    public readonly versionNumber: number,
    public readonly rules: Rule[],
    public readonly decisionTables: DecisionTable[],
    public readonly variables: RuleVariable[],
    public readonly createdAt: Date,
    public readonly publishedAt: Date | null = null,
    public readonly isArchived: boolean = false,
  ) {}
}
