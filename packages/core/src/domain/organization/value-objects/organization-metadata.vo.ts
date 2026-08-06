export class OrganizationMetadata {
  constructor(
    public readonly industryProfile: string,
    public readonly growthStage: string,
    public readonly businessHealthScore: number,
    public readonly customTags: Record<string, string>,
    public readonly aiRecommendations: Record<string, unknown>,
  ) {}
}
