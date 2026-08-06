export class LeadQualification {
  constructor(
    public readonly isQualified: boolean,
    public readonly qualifiedAt: Date | null,
    public readonly qualifiedBy: string | null,
    public readonly disqualificationReason: string | null,
    public readonly budget: number | null,
    public readonly authority: string | null,
    public readonly need: string | null,
    public readonly timeline: string | null,
  ) {}
}
