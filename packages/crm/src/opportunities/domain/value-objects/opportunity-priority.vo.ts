export type OpportunityPriorityValue = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export class OpportunityPriority {
  constructor(public readonly value: OpportunityPriorityValue) {}
}
