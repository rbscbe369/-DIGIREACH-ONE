export type ActivityPriorityValue = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export class ActivityPriority {
  constructor(public readonly value: ActivityPriorityValue) {}
}
