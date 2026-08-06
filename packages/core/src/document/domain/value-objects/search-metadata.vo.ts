export class SearchMetadata {
  constructor(
    public readonly title: string,
    public readonly description: string | null = null,
    public readonly keywords: string[] = [],
    public readonly tags: string[] = [],
    public readonly language: string | null = null,
    public readonly author: string | null = null,
    public readonly category: string | null = null,
    public readonly classification: string | null = null,
  ) {}
}
