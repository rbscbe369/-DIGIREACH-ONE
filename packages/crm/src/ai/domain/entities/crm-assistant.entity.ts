import { ConversationPreference } from '../value-objects/conversation-preference.vo';
export class CRMAssistant {
  constructor(
    public readonly assistantId: string,
    public readonly name: string,
    public preferences: ConversationPreference,
  ) {}
}
