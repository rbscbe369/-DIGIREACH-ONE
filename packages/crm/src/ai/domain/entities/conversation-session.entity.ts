import { AIUsageStatistics } from '../value-objects/ai-usage-statistics.vo';
export class ConversationSession {
  constructor(
    public readonly sessionId: string,
    public readonly conversationId: string,
    public readonly startTime: Date,
    public usage: AIUsageStatistics | null,
  ) {}
}
