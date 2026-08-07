export class ProductNature {
  constructor(
    public readonly nature:
      | 'PHYSICAL'
      | 'DIGITAL'
      | 'SERVICE'
      | 'SUBSCRIPTION'
      | 'RENTAL'
      | 'WARRANTY'
      | 'LICENSE'
      | 'VIRTUAL'
      | 'COMPOSITE',
  ) {}
}
