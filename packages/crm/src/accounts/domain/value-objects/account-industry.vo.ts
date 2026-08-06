export class AccountIndustry {
  constructor(
    public readonly primaryIndustry: string | null,
    public readonly secondaryIndustry: string | null,
    public readonly naicsCode: string | null,
    public readonly sicCode: string | null,
  ) {}
}
