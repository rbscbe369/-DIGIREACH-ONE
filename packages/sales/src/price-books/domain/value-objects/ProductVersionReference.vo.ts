export class ProductVersionReference {
  constructor(
    public readonly productVersionId: string,
    public readonly productId: string | null = null,
  ) {}
}
