export class ContactRelationship {
  constructor(
    public readonly targetContactId: string,
    public readonly type:
      | 'MANAGER'
      | 'ASSISTANT'
      | 'EXECUTIVE_SPONSOR'
      | 'DECISION_MAKER'
      | 'INFLUENCER'
      | 'TECHNICAL_CONTACT'
      | 'FINANCE_CONTACT'
      | 'BILLING_CONTACT'
      | 'LEGAL_CONTACT'
      | 'PARTNER_CONTACT'
      | 'FAMILY'
      | 'CUSTOM',
    public readonly customType: string | null,
  ) {}
}
