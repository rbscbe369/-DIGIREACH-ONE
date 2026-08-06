import { IAICostCalculator } from '../interfaces/i-ai-cost.calculator';
import { AITokenUsage } from '../../domain/value-objects/ai-token-usage.vo';
import { AIModel } from '../../domain/value-objects/ai-model.vo';
import { AICost } from '../../domain/value-objects/ai-cost.vo';

export class CostEvaluator implements IAICostCalculator {
  calculateCost(usage: AITokenUsage, model: AIModel): AICost {
    const inputCost = (usage.input / 1000) * model.inputCostPer1k;
    const outputCost = (usage.output / 1000) * model.outputCostPer1k;
    const totalCost = inputCost + outputCost;

    return new AICost('USD', inputCost, outputCost, totalCost);
  }
}
