import { File } from './file.entity';
import { DocumentLifecycle } from '../value-objects/document-lifecycle.vo';

export class DocumentVersion {
  constructor(
    public readonly versionId: string,
    public readonly documentId: string,
    public readonly versionNumber: number,
    public readonly file: File,
    public readonly lifecycleState: DocumentLifecycle,
    public readonly createdBy: string,
    public readonly createdAt: Date,
  ) {}
}
