export class ProductPackaging {
  constructor(
    public readonly level:
      'EACH' | 'PACK' | 'INNER_CARTON' | 'OUTER_CARTON' | 'CASE' | 'PALLET' | 'CONTAINER',
    public readonly quantityPerPackage: number,
  ) {}
}
