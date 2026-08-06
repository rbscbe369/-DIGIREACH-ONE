export class ConversationPreference {
  constructor(
    public readonly tone: string,
    public readonly verbosity: 'CONCISE' | 'DETAILED',
  ) {}
}
