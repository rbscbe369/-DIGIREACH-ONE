import { ICRMConversationRepository } from '../interfaces/i-crm-conversation.repository';
// import removed for unused AIConversation
import { ConversationMessage } from '../../domain/value-objects/conversation-message.vo';
export class ConversationManager {
  constructor(private readonly repo: ICRMConversationRepository) {}
  async addMessage(conversationId: string, message: ConversationMessage): Promise<void> {
    const convo = await this.repo.findById(conversationId);
    if (convo) {
      convo.messages.push(message);
      await this.repo.save(convo);
    }
  }
}
