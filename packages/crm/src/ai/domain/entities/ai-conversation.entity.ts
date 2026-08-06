import { ConversationMessage } from '../value-objects/conversation-message.vo';
import { ConversationMemory } from '../value-objects/conversation-memory.vo';
export class AIConversation {
  constructor(
    public readonly conversationId: string,
    public readonly userId: string,
    public messages: ConversationMessage[],
    public memory: ConversationMemory,
  ) {}
}
