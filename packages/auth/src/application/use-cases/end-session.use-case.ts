import { EndSessionCommand } from '../commands/end-session.command';
import { ISessionRepository } from '../../domain/repositories/i-session.repository';
import { IEventPublisher } from '../interfaces/i-event-publisher.interface';
import { SessionId } from '../../domain/value-objects/id.vo';

export class EndSessionUseCase {
  constructor(
    private readonly sessionRepository: ISessionRepository,
    private readonly eventPublisher: IEventPublisher,
  ) {}

  async execute(command: EndSessionCommand): Promise<void> {
    const session = await this.sessionRepository.findById(new SessionId(command.sessionId));
    if (!session) return; // Idempotent

    session.terminate('User requested logout');
    await this.sessionRepository.save(session);
    await this.eventPublisher.publish(session.domainEvents);
    session.clearEvents();
  }
}
