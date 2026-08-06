import { SearchIndex } from '../../domain/entities/search-index.entity';

export interface ISearchIndexRepository {
  findByName(name: string): Promise<SearchIndex | null>;
  save(index: SearchIndex): Promise<void>;
}
