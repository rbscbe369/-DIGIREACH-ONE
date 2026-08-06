export type OpportunityStageValue =
  | 'PROSPECTING'
  | 'QUALIFICATION'
  | 'NEEDS_ANALYSIS'
  | 'VALUE_PROPOSITION'
  | 'PROPOSAL'
  | 'NEGOTIATION'
  | 'VERBAL_COMMIT'
  | 'CONTRACT_REVIEW'
  | 'CLOSED_WON'
  | 'CLOSED_LOST'
  | 'CANCELLED';

export class OpportunityStage {
  constructor(
    public readonly value: OpportunityStageValue,
    public readonly enteredAt: Date,
  ) {}
}
