export type LeadPriorityValue = 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';

export class LeadPriority {
  constructor(public readonly value: LeadPriorityValue) {}
}
