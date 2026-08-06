import { IDocumentRepository } from '../../application/interfaces/i-document.repository';
import { Document } from '../../domain/entities/document.entity';

export class MemoryDocumentRepository implements IDocumentRepository {
  private docs = new Map<string, Document>();

  async save(document: Document): Promise<void> {
    this.docs.set(document.id, document);
  }

  async findById(id: string): Promise<Document | null> {
    return this.docs.get(id) || null;
  }

  async delete(id: string): Promise<void> {
    this.docs.delete(id);
  }
}
