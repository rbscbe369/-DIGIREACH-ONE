import { IAccountSearchProvider } from '../../application/interfaces/i-account-search.provider';
import { Account } from '../../domain/entities/account.entity';

export class DummyAccountSearchProvider implements IAccountSearchProvider {
  async search(_query: string, _metadata: Record<string, unknown>): Promise<Account[]> {
    return [];
  }
}
