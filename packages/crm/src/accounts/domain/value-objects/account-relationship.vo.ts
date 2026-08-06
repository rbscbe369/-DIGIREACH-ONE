export class AccountRelationship {
  constructor(
    public readonly targetEntityId: string,
    public readonly targetType: 'ACCOUNT' | 'CONTACT' | 'PARTNER',
    public readonly relationshipType: string,
    public readonly customType: string | null,
  ) {}
}
