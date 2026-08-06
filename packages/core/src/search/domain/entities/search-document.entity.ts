import { SearchAIMetadata } from '../value-objects/search-ai-metadata.vo';

export class SearchDocument {
  constructor(
    public readonly id: string,
    public readonly entityType: string,
    public readonly entityId: string,
    public readonly title: string,
    public readonly content: string,
    public readonly metadata: Record<string, unknown>,
    public readonly aiMetadata: SearchAIMetadata,
    public readonly organizationId: string | null,
    public readonly allowedRoleIds: string[],
    public readonly allowedUserIds: string[],
  ) {}
}
