import { IDocumentRepository } from '../interfaces/i-document.repository';
import { IStorageProvider } from '../interfaces/i-storage.provider';
import { AccessEvaluator } from '../services/access.evaluator';
import { Document } from '../../domain/entities/document.entity';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { DocumentVersion } from '../../domain/entities/document-version.entity';
import { File } from '../../domain/entities/file.entity';
import { FileChecksum } from '../../domain/value-objects/file-checksum.vo';
import { ContentType } from '../../domain/value-objects/content-type.vo';
import { DocumentLifecycle } from '../../domain/value-objects/document-lifecycle.vo';

export class CreateDocumentUseCase {
  constructor(
    private readonly repo: IDocumentRepository,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(document: Document, context: ExecutionContext): Promise<void> {
    if (!this.accessEvaluator.canAccess(document.accessPolicy, context)) {
      throw new Error('Access Denied');
    }
    await this.repo.save(document);
  }
}

export class UploadVersionUseCase {
  constructor(
    private readonly repo: IDocumentRepository,
    private readonly storage: IStorageProvider,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(
    documentId: string,
    bytes: Buffer,
    fileName: string,
    context: ExecutionContext,
  ): Promise<void> {
    const doc = await this.repo.findById(documentId);
    if (!doc) throw new Error('Not found');
    if (!this.accessEvaluator.canAccess(doc.accessPolicy, context))
      throw new Error('Access Denied');

    const path = `docs/${documentId}/${Date.now()}_${fileName}`;
    await this.storage.upload(path, bytes, 'application/octet-stream');

    const file = new File(
      Date.now().toString(),
      'default',
      path,
      bytes.length,
      new ContentType('application/octet-stream', fileName.split('.').pop() || ''),
      new FileChecksum('SHA256', 'dummy-hash'),
      new Date(),
    );

    const version = new DocumentVersion(
      Date.now().toString(),
      documentId,
      doc.versions.length + 1,
      file,
      DocumentLifecycle.READY,
      context.userId || 'system',
      new Date(),
    );

    doc.versions.push(version);
    await this.repo.save(doc);
  }
}

export class GetDocumentUseCase {
  constructor(
    private readonly repo: IDocumentRepository,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(documentId: string, context: ExecutionContext): Promise<Document> {
    const doc = await this.repo.findById(documentId);
    if (!doc) throw new Error('Not found');
    if (!this.accessEvaluator.canAccess(doc.accessPolicy, context))
      throw new Error('Access Denied');
    return doc;
  }
}

export class DeleteDocumentUseCase {
  constructor(
    private readonly repo: IDocumentRepository,
    private readonly accessEvaluator: AccessEvaluator,
  ) {}

  async execute(documentId: string, context: ExecutionContext): Promise<void> {
    const doc = await this.repo.findById(documentId);
    if (!doc) throw new Error('Not found');
    if (!this.accessEvaluator.canAccess(doc.accessPolicy, context))
      throw new Error('Access Denied');
    await this.repo.delete(documentId);
  }
}
