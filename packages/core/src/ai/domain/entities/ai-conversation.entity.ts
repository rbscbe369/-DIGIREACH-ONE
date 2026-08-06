export class AIConversationMessage {
  constructor(
    public readonly role: 'system' | 'user' | 'assistant',
    public readonly content: string,
    public readonly timestamp: Date,
  ) {}
}

export class AIConversation {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly messages: AIConversationMessage[],
  ) {}
}
