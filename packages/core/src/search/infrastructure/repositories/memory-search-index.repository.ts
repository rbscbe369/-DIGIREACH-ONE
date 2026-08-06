import { ISearchIndexRepository } from '../../application/interfaces/i-search-index.repository';
import { SearchIndex } from '../../domain/entities/search-index.entity';

export class MemorySearchIndexRepository implements ISearchIndexRepository {
  private indexes = new Map<string, SearchIndex>();

  async findByName(name: string): Promise<SearchIndex | null> {
    return this.indexes.get(name) || null;
  }

  async save(index: SearchIndex): Promise<void> {
    this.indexes.set(index.name, index);
  }
}
