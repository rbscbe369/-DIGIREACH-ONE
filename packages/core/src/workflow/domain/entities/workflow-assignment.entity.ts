import { AssignmentType } from '../value-objects/assignment-type.vo';

export class WorkflowAssignment {
  constructor(
    public readonly type: AssignmentType,
    public readonly referenceId: string, // could be userId, roleId, or expression string
    public readonly allowDelegation: boolean = false,
    public readonly allowSubstitution: boolean = false,
  ) {}
}
