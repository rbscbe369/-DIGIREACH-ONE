import { Checklist } from '../value-objects/checklist.vo';

export class Task {
  constructor(
    public readonly taskId: string,
    public readonly subject: string,
    public readonly description: string | null,
    public readonly ownerId: string,
    public readonly assigneeId: string | null,
    public readonly priority: string,
    public readonly status: string,
    public readonly dueDate: Date | null,
    public readonly startDate: Date | null,
    public readonly completionDate: Date | null,
    public readonly estimatedDuration: number | null,
    public readonly actualDuration: number | null,
    public readonly checklist: Checklist,
    public readonly dependencies: string[],
    public readonly outcome: string | null,
  ) {}
}
