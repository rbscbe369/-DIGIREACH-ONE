export class CustomerRisk {
  constructor(
    public readonly churnRisk: number,
    public readonly paymentRisk: number,
    public readonly relationshipRisk: number,
    public readonly competitiveRisk: number,
    public readonly supportRisk: number,
    public readonly expansionRisk: number,
  ) {}
}
