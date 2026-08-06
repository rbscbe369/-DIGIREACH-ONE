import {
  CreateDocumentUseCase,
  UploadVersionUseCase,
  GetDocumentUseCase,
  DeleteDocumentUseCase,
} from '../use-cases/document.use-cases';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { Document } from '../../domain/entities/document.entity';

export class DocumentService {
  constructor(
    private readonly createUseCase: CreateDocumentUseCase,
    private readonly uploadUseCase: UploadVersionUseCase,
    private readonly getUseCase: GetDocumentUseCase,
    private readonly deleteUseCase: DeleteDocumentUseCase,
  ) {}

  async create(document: Document, context: ExecutionContext): Promise<void> {
    await this.createUseCase.execute(document, context);
  }

  async uploadVersion(
    documentId: string,
    bytes: Buffer,
    fileName: string,
    context: ExecutionContext,
  ): Promise<void> {
    await this.uploadUseCase.execute(documentId, bytes, fileName, context);
  }

  async getDocument(documentId: string, context: ExecutionContext): Promise<Document> {
    return this.getUseCase.execute(documentId, context);
  }

  async deleteDocument(documentId: string, context: ExecutionContext): Promise<void> {
    await this.deleteUseCase.execute(documentId, context);
  }
}
