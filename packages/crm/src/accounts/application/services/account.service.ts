import { IAccountRepository } from '../interfaces/i-account.repository';
import { Account } from '../../domain/entities/account.entity';

export class AccountService {
  constructor(private readonly repo: IAccountRepository) {}

  async getAccount(id: string): Promise<Account | null> {
    return this.repo.findById(id);
  }

  async saveAccount(account: Account): Promise<void> {
    await this.repo.save(account);
  }

  async deleteAccount(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
