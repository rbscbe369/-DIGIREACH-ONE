import { SessionModel } from '../prisma/interfaces';
import { Session, SessionStatus } from '../../../domain/entities/session.entity';
import { SessionId, UserId, DeviceId, WorkspaceId } from '../../../domain/value-objects/id.vo';

export class SessionMapper {
  static toDomain(raw: SessionModel): Session {
    return new Session(
      new SessionId(raw.id),
      new UserId(raw.userId),
      new DeviceId(raw.deviceId),
      new WorkspaceId(raw.workspaceId),
      new Date(raw.expiresAt),
      raw.status as SessionStatus,
    );
  }

  static toPersistence(session: Session): SessionModel {
    return {
      id: session.id.value,
      userId: session.userId.value,
      deviceId: session.deviceId.value,
      workspaceId: session.workspaceId.value,
      expiresAt: session.expiresAt.toISOString(),
      status: session.status,
    };
  }
}
