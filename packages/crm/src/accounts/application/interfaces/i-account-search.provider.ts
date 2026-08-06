import { Account } from '../../domain/entities/account.entity';

export interface IAccountSearchProvider {
  search(query: string, metadata: Record<string, unknown>): Promise<Account[]>;
}
