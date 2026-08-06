export class AccountClassification {
  constructor(
    public readonly category: string | null,
    public readonly tier: string | null,
    public readonly strategicImportance: string | null,
  ) {}
}
