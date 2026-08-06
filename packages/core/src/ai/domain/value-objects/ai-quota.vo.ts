export class AIQuota {
  constructor(
    public readonly organizationId: string,
    public readonly dailyTokenLimit: number,
    public readonly monthlyBudgetUsd: number,
    public readonly tokensUsedToday: number,
    public readonly budgetUsedThisMonth: number,
  ) {}
}
