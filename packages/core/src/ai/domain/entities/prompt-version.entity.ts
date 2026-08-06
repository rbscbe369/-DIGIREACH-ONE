export class PromptVersion {
  constructor(
    public readonly id: string,
    public readonly templateId: string,
    public readonly versionNumber: number,
    public readonly systemPrompt: string,
    public readonly userPromptTemplate: string,
    public readonly inputVariables: string[],
    public readonly createdAt: Date,
  ) {}
}
