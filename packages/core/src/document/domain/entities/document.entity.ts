import { DocumentVersion } from './document-version.entity';
import { SecurityClassification } from '../value-objects/security-classification.vo';
import { AccessPolicy } from '../value-objects/access-policy.vo';
import { RetentionPolicy } from '../value-objects/retention-policy.vo';
import { SearchMetadata } from '../value-objects/search-metadata.vo';
import { AIMetadata } from '../value-objects/ai-metadata.vo';
import { Attachment } from '../value-objects/attachment.vo';

export class Document {
  constructor(
    public readonly id: string,
    public readonly folderId: string | null,
    public readonly classification: SecurityClassification,
    public readonly accessPolicy: AccessPolicy,
    public readonly retentionPolicy: RetentionPolicy,
    public readonly searchMetadata: SearchMetadata,
    public readonly aiMetadata: AIMetadata,
    public readonly attachments: Attachment[],
    public readonly versions: DocumentVersion[],
    public readonly ownerId: string,
    public readonly createdAt: Date,
  ) {}

  getLatestVersion(): DocumentVersion | null {
    if (this.versions.length === 0) return null;
    return this.versions.reduce((latest, current) =>
      current.versionNumber > latest.versionNumber ? current : latest,
    );
  }
}
