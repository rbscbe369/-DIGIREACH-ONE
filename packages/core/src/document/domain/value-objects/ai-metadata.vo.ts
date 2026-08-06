export class AIMetadata {
  constructor(
    public readonly ocrText: string | null = null,
    public readonly summary: string | null = null,
    public readonly entities: Record<string, string[]> = {},
    public readonly keywords: string[] = [],
    public readonly vectorEmbeddingId: string | null = null,
    public readonly documentInsights: Record<string, unknown> = {},
  ) {}
}
