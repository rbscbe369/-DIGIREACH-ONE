export class CustomerSegmentation {
  constructor(
    public readonly industry: string | null,
    public readonly region: string | null,
    public readonly country: string | null,
    public readonly revenueTier: string | null,
    public readonly companySize: string | null,
    public readonly strategicTier: string | null,
    public readonly lifecycleStage: string | null,
    public readonly customerType: string | null,
    public readonly customSegments: string[] = [],
  ) {}
}
