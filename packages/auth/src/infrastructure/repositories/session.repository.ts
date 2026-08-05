import { BaseRepository } from './base.repository';
import { IPrismaClient, SessionModel } from '../persistence/prisma/interfaces';
import { ISessionRepository } from '../../domain/repositories/i-session.repository';
import { Session } from '../../domain/entities/session.entity';
import { SessionId, UserId } from '../../domain/value-objects/id.vo';
import { SessionMapper } from '../persistence/mappers/session.mapper';

export class SessionRepository extends BaseRepository<Session, SessionId> implements ISessionRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }


  async findById(id: SessionId): Promise<Session | null> {
    const data = await this.prisma.session.findUnique({ where: { id: id.value } });
    return data ? SessionMapper.toDomain(data) : null;
  }

  async findActiveByUser(userId: UserId): Promise<Session[]> {
    const data = await this.prisma.session.findMany({
      where: { userId: userId.value, status: 'ACTIVE' }
    });
    return data.map((d: SessionModel) => SessionMapper.toDomain(d));
  }

  async save(session: Session): Promise<void> {
    const data = SessionMapper.toPersistence(session);
    await this.prisma.session.upsert({
      where: { id: data.id },
      update: data,
      create: data
    });
  }

  async revokeAllForUser(userId: UserId): Promise<void> {
    await this.prisma.session.updateMany({
      where: { userId: userId.value, status: 'ACTIVE' },
      data: { status: 'TERMINATED' }
    });
  }
}