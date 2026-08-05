import { Session } from '../entities/session.entity';
import { SessionId, UserId } from '../value-objects/id.vo';

export interface ISessionRepository {
  findById(id: SessionId): Promise<Session | null>;
  findActiveByUser(userId: UserId): Promise<Session[]>;
  save(session: Session): Promise<void>;
  revokeAllForUser(userId: UserId): Promise<void>;
}