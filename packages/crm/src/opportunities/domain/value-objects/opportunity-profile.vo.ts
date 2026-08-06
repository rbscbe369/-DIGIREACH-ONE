export class OpportunityProfile {
  constructor(
    public readonly opportunityName: string,
    public readonly description: string | null,
    public readonly nextStep: string | null,
    public readonly customFields: Record<string, unknown>,
  ) {}
}
