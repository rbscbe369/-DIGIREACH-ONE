export class ProductLocalization {
  constructor(
    public readonly title: string,
    public readonly subtitle: string | null,
    public readonly description: string,
    public readonly specifications: string,
    public readonly features: string[],
    public readonly marketingCopy: string,
    public readonly seoMetadata: Record<string, string>,
    public readonly keywords: string[],
  ) {}
}
