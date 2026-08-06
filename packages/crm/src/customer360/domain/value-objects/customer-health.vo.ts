export class CustomerHealth {
  constructor(
    public readonly healthScore: number,
    public readonly relationshipScore: number,
    public readonly engagementScore: number,
    public readonly growthScore: number,
    public readonly loyaltyScore: number,
    public readonly productAdoption: number,
    public readonly renewalScore: number,
    public readonly riskScore: number,
  ) {}
}
