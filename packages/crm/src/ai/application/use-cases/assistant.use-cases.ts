import { ConversationManager } from '../services/conversation.manager';
import { ConversationMessage } from '../../domain/value-objects/conversation-message.vo';
import { InsightGenerator } from '../services/insight.generator';
import { RecommendationGenerator } from '../services/recommendation.generator';

export class ContinueConversationUseCase {
  constructor(private readonly manager: ConversationManager) {}
  async execute(conversationId: string, message: ConversationMessage): Promise<void> {
    await this.manager.addMessage(conversationId, message);
  }
}

export class GenerateInsightsUseCase {
  constructor(private readonly generator: InsightGenerator) {}
  async execute(context: Record<string, unknown>) {
    return this.generator.generate(context);
  }
}

export class GenerateRecommendationsUseCase {
  constructor(private readonly generator: RecommendationGenerator) {}
  async execute(context: Record<string, unknown>) {
    return this.generator.generate(context);
  }
}
