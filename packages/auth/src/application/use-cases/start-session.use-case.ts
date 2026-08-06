import { StartSessionCommand } from '../commands/start-session.command';
import { ISessionRepository } from '../../domain/repositories/i-session.repository';
import { IDeviceRepository } from '../../domain/repositories/i-device.repository';
import { IIdGenerator } from '../interfaces/i-id-generator.interface';
import { IEventPublisher } from '../interfaces/i-event-publisher.interface';
import { Session } from '../../domain/entities/session.entity';
import { Device } from '../../domain/entities/device.entity';
import { SessionId, UserId, DeviceId, WorkspaceId } from '../../domain/value-objects/id.vo';

export class StartSessionUseCase {
  constructor(
    private readonly sessionRepository: ISessionRepository,
    private readonly deviceRepository: IDeviceRepository,
    private readonly idGenerator: IIdGenerator,
    private readonly eventPublisher: IEventPublisher,
  ) {}

  async execute(command: StartSessionCommand): Promise<string> {
    const userId = new UserId(command.userId);
    let device = await this.deviceRepository.findByFingerprint(userId, command.deviceFingerprint);
    if (!device) {
      device = new Device(
        new DeviceId(this.idGenerator.generate()),
        userId,
        command.deviceFingerprint,
      );
      await this.deviceRepository.save(device);
    }

    const sessionId = new SessionId(this.idGenerator.generate());
    // Fallback to a dummy workspaceId if null to satisfy types
    const workspaceId = new WorkspaceId(command.targetWorkspaceId || 'default-workspace-id');

    const session = Session.start(sessionId, userId, device.id, workspaceId, 120);

    await this.sessionRepository.save(session);
    await this.eventPublisher.publish(session.domainEvents);
    session.clearEvents();

    return sessionId.value;
  }
}
