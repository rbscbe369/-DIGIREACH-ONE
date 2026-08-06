export class ConversationMemory {
  constructor(
    public readonly shortTermContext: Record<string, unknown>,
    public readonly longTermEmbeddings: string[],
  ) {}
}
