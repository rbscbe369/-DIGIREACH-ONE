import { Account } from '../../domain/entities/account.entity';

export class AccountResolver {
  static resolveAccount(data: unknown): Account {
    return data as Account; // Placeholder
  }
}
