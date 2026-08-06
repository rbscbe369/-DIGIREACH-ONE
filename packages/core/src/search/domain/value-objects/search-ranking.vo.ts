export class SearchRanking {
  constructor(
    public readonly exactMatchBoost: number = 1.0,
    public readonly prefixMatchBoost: number = 1.0,
    public readonly fuzzyMatchBoost: number = 1.0,
    public readonly recencyBoost: number = 1.0,
    public readonly popularityBoost: number = 1.0,
    public readonly businessWeight: number = 1.0,
  ) {}
}
