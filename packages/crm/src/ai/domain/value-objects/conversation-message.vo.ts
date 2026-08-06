export class ConversationMessage {
  constructor(
    public readonly messageId: string,
    public readonly role: 'USER' | 'ASSISTANT' | 'SYSTEM' | 'TOOL',
    public readonly content: string,
    public readonly timestamp: Date,
  ) {}
}
