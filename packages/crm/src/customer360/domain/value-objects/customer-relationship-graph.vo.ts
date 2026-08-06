export class RelationshipNode {
  constructor(
    public readonly entityId: string,
    public readonly type:
      | 'ORGANIZATION'
      | 'CONTACT'
      | 'DECISION_MAKER'
      | 'INFLUENCER'
      | 'CHAMPION'
      | 'SPONSOR'
      | 'PARTNER'
      | 'VENDOR'
      | 'COMPETITOR'
      | 'INTERNAL_OWNER'
      | 'REFERRAL_SOURCE',
    public readonly label: string,
  ) {}
}

export class CustomerRelationshipGraph {
  constructor(public readonly nodes: RelationshipNode[] = []) {}
}
