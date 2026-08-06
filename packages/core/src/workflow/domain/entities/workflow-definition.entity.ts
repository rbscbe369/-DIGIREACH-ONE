import { WorkflowCategory } from '../value-objects/workflow-category.vo';
import { WorkflowType } from '../value-objects/workflow-type.vo';
import { WorkflowVersion } from './workflow-version.entity';

export class WorkflowDefinition {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string | null,
    public readonly category: WorkflowCategory,
    public readonly type: WorkflowType,
    public readonly versions: WorkflowVersion[],
    public readonly createdAt: Date,
  ) {}
}
