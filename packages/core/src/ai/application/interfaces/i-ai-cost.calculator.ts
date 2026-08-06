import { AITokenUsage } from '../../domain/value-objects/ai-token-usage.vo';
import { AIModel } from '../../domain/value-objects/ai-model.vo';
import { AICost } from '../../domain/value-objects/ai-cost.vo';

export interface IAICostCalculator {
  calculateCost(usage: AITokenUsage, model: AIModel): AICost;
}
