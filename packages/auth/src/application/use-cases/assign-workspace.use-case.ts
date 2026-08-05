import { AssignWorkspaceCommand } from '../commands/assign-workspace.command';
import { IWorkspaceRepository } from '../../domain/repositories/i-workspace.repository';
import { IEventPublisher } from '../interfaces/i-event-publisher.interface';
import { IIdGenerator } from '../interfaces/i-id-generator.interface';
import { Workspace } from '../../domain/entities/workspace.entity';
import { WorkspaceId, UserId, HierarchyNodeId, PersonaId } from '../../domain/value-objects/id.vo';

export class AssignWorkspaceUseCase {
  constructor(
    private readonly workspaceRepository: IWorkspaceRepository,
    private readonly idGenerator: IIdGenerator,
    private readonly eventPublisher: IEventPublisher
  ) {}

  async execute(command: AssignWorkspaceCommand): Promise<string> {
    const wsId = new WorkspaceId(this.idGenerator.generate());
    const ws = Workspace.assign(
      wsId,
      new UserId(command.userId),
      new HierarchyNodeId(command.hierarchyNodeId),
      new PersonaId(command.personaId)
    );

    await this.workspaceRepository.save(ws);
    await this.eventPublisher.publish(ws.domainEvents);
    ws.clearEvents();

    return wsId.value;
  }
}