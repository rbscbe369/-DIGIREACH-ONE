import { AIQuota } from '../../domain/value-objects/ai-quota.vo';

export class QuotaEvaluator {
  static checkQuota(quota: AIQuota, estimatedTokens: number, estimatedCostUsd: number): void {
    if (quota.tokensUsedToday + estimatedTokens > quota.dailyTokenLimit) {
      throw new Error('Daily token limit exceeded');
    }

    if (quota.budgetUsedThisMonth + estimatedCostUsd > quota.monthlyBudgetUsd) {
      throw new Error('Monthly AI budget exceeded');
    }
  }
}
