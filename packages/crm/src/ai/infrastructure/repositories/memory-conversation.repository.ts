import { ICRMConversationRepository } from '../../application/interfaces/i-crm-conversation.repository';
import { AIConversation } from '../../domain/entities/ai-conversation.entity';

export class MemoryConversationRepository implements ICRMConversationRepository {
  private records = new Map<string, AIConversation>();
  async findById(id: string): Promise<AIConversation | null> {
    return this.records.get(id) || null;
  }
  async save(conversation: AIConversation): Promise<void> {
    this.records.set(conversation.conversationId, conversation);
  }
}
