import { Account } from '../../domain/entities/account.entity';
import { AccountRelationship } from '../../domain/value-objects/account-relationship.vo';

export class AccountRelationshipService {
  async addRelationship(account: Account, relationship: AccountRelationship): Promise<void> {
    account.relationships.push(relationship);
  }
}
