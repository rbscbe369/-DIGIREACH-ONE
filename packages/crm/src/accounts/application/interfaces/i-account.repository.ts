import { Account } from '../../domain/entities/account.entity';

export interface IAccountRepository {
  findById(id: string): Promise<Account | null>;
  save(account: Account): Promise<void>;
  delete(id: string): Promise<void>;
}
