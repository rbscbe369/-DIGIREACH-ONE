import { ActivateUserCommand } from '../commands/activate-user.command';
import { IUserRepository } from '../../domain/repositories/i-user.repository';
import { IEventPublisher } from '../interfaces/i-event-publisher.interface';
import { UserId } from '../../domain/value-objects/id.vo';

export class ActivateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly eventPublisher: IEventPublisher,
  ) {}

  async execute(command: ActivateUserCommand): Promise<void> {
    const user = await this.userRepository.findById(new UserId(command.userId));
    if (!user) throw new Error('User not found');

    user.activate();
    await this.userRepository.save(user);
    await this.eventPublisher.publish(user.domainEvents);
    user.clearEvents();
  }
}
