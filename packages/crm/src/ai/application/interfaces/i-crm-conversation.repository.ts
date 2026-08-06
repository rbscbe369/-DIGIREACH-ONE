import { AIConversation } from '../../domain/entities/ai-conversation.entity';
export interface ICRMConversationRepository {
  findById(id: string): Promise<AIConversation | null>;
  save(conversation: AIConversation): Promise<void>;
}
