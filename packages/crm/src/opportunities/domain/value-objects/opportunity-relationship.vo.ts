export class OpportunityRelationship {
  constructor(
    public readonly targetEntityId: string,
    public readonly targetType: 'ACCOUNT' | 'CONTACT' | 'LEAD',
    public readonly relationshipType: string,
  ) {}
}
