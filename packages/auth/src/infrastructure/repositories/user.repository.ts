import { BaseRepository } from './base.repository';
import { IPrismaClient } from '../persistence/prisma/interfaces';
import { IUserRepository } from '../../domain/repositories/i-user.repository';
import { User } from '../../domain/entities/user.entity';
import { UserId, OrganizationId } from '../../domain/value-objects/id.vo';
import { EmailAddress } from '../../domain/value-objects/email-address.vo';
import { UserMapper } from '../persistence/mappers/user.mapper';

export class UserRepository extends BaseRepository<User, UserId> implements IUserRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }

  async findById(id: UserId): Promise<User | null> {
    const data = await this.prisma.user.findUnique({ where: { id: id.value } });
    return data ? UserMapper.toDomain(data) : null;
  }

  async findByEmail(email: EmailAddress, organizationId: OrganizationId): Promise<User | null> {
    const data = await this.prisma.user.findFirst({
      where: { email: email.value, organizationId: organizationId.value },
    });
    return data ? UserMapper.toDomain(data) : null;
  }

  async save(user: User): Promise<void> {
    const data = UserMapper.toPersistence(user);
    await this.prisma.user.upsert({
      where: { id: data.id },
      update: data,
      create: data,
    });
  }
}
