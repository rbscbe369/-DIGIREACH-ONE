import { DomainEvent } from '../../events/domain.event';

export class WorkspaceResolvedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkspaceResolvedEvent';
  constructor(
    public readonly profileId: string,
    public readonly userId: string,
  ) {}
}
