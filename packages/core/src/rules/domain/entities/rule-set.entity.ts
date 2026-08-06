import { RuleCategory } from '../value-objects/rule-category.vo';
import { RuleVersion } from './rule-version.entity';

export class RuleSet {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string | null,
    public readonly category: RuleCategory,
    public readonly versions: RuleVersion[],
    public readonly createdAt: Date,
  ) {}
}
