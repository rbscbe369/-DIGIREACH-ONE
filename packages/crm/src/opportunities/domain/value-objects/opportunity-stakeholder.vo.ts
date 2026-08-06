export class OpportunityStakeholder {
  constructor(
    public readonly contactId: string,
    public readonly role:
      | 'DECISION_MAKER'
      | 'CHAMPION'
      | 'INFLUENCER'
      | 'TECHNICAL_EVALUATOR'
      | 'FINANCE_APPROVER'
      | 'LEGAL_REVIEWER'
      | 'PROCUREMENT'
      | 'EXECUTIVE_SPONSOR'
      | 'END_USER',
    public readonly isPrimary: boolean,
  ) {}
}
