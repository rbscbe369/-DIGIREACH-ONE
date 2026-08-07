export class ProductRelationshipVO {
  constructor(
    public readonly relationshipType:
      | 'PARENT'
      | 'CHILD'
      | 'ACCESSORY'
      | 'REPLACEMENT'
      | 'ALTERNATIVE'
      | 'COMPATIBLE'
      | 'REQUIRED'
      | 'CROSS_SELL'
      | 'UPSELL'
      | 'SUCCESSOR'
      | 'PREDECESSOR',
    public readonly targetProductId: string,
  ) {}
}
