import { UserModel } from '../prisma/interfaces';
import { User, UserStatus } from '../../../domain/entities/user.entity';
import { UserId, OrganizationId } from '../../../domain/value-objects/id.vo';
import { EmailAddress } from '../../../domain/value-objects/email-address.vo';

export class UserMapper {
  static toDomain(raw: UserModel): User {
    return new User(
      new UserId(raw.id),
      new OrganizationId(raw.organizationId),
      new EmailAddress(raw.email),
      raw.status as UserStatus,
    );
  }

  static toPersistence(user: User): UserModel {
    return {
      id: user.id.value,
      organizationId: user.organizationId.value,
      email: user.email.value,
      status: user.status,
    };
  }
}
