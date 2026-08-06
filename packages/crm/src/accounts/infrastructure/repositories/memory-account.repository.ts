import { IAccountRepository } from '../../application/interfaces/i-account.repository';
import { Account } from '../../domain/entities/account.entity';

export class MemoryAccountRepository implements IAccountRepository {
  private accounts = new Map<string, Account>();

  async findById(id: string): Promise<Account | null> {
    return this.accounts.get(id) || null;
  }

  async save(account: Account): Promise<void> {
    this.accounts.set(account.id, account);
  }

  async delete(id: string): Promise<void> {
    this.accounts.delete(id);
  }
}
