import { InviteUserCommand } from '../commands/invite-user.command';
import { IUserRepository } from '../../domain/repositories/i-user.repository';
import { IOrganizationRepository } from '../../domain/repositories/i-organization.repository';
import { IIdGenerator } from '../interfaces/i-id-generator.interface';
import { IEventPublisher } from '../interfaces/i-event-publisher.interface';
import { User } from '../../domain/entities/user.entity';
import { UserId, OrganizationId } from '../../domain/value-objects/id.vo';
import { EmailAddress } from '../../domain/value-objects/email-address.vo';

export class InviteUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly organizationRepository: IOrganizationRepository,
    private readonly idGenerator: IIdGenerator,
    private readonly eventPublisher: IEventPublisher
  ) {}

  async execute(command: InviteUserCommand): Promise<string> {
    const orgId = new OrganizationId(command.organizationId);
    const org = await this.organizationRepository.findById(orgId);
    if (!org) throw new Error('Organization not found');

    const email = new EmailAddress(command.email);
    const existingUser = await this.userRepository.findByEmail(email, orgId);
    if (existingUser) throw new Error('User already exists');

    const userId = new UserId(this.idGenerator.generate());
    const user = User.create(userId, orgId, email);

    await this.userRepository.save(user);
    await this.eventPublisher.publish(user.domainEvents);
    user.clearEvents();

    return userId.value;
  }
}