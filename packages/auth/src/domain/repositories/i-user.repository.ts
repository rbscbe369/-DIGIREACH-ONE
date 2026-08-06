import { User } from '../entities/user.entity';
import { UserId, OrganizationId } from '../value-objects/id.vo';
import { EmailAddress } from '../value-objects/email-address.vo';

export interface IUserRepository {
  findById(id: UserId): Promise<User | null>;
  findByEmail(email: EmailAddress, organizationId: OrganizationId): Promise<User | null>;
  save(user: User): Promise<void>;
}
