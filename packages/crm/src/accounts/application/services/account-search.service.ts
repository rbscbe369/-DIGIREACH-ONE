import { IAccountSearchProvider } from '../interfaces/i-account-search.provider';
import { Account } from '../../domain/entities/account.entity';

export class AccountSearchService {
  constructor(private readonly searchProvider: IAccountSearchProvider) {}

  async searchAccounts(query: string, metadata: Record<string, unknown>): Promise<Account[]> {
    return this.searchProvider.search(query, metadata);
  }
}
