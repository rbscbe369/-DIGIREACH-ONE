export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class WorkflowCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowCreatedEvent';
  constructor(public readonly definitionId: string) {}
}

export class WorkflowStartedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowStartedEvent';
  constructor(public readonly instanceId: string) {}
}

export class TaskAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskAssignedEvent';
  constructor(
    public readonly taskId: string,
    public readonly assigneeId: string,
  ) {}
}

export class TaskCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskCompletedEvent';
  constructor(public readonly taskId: string) {}
}

export class TaskRejectedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'TaskRejectedEvent';
  constructor(public readonly taskId: string) {}
}

export class WorkflowEscalatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowEscalatedEvent';
  constructor(public readonly instanceId: string) {}
}

export class WorkflowCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowCompletedEvent';
  constructor(public readonly instanceId: string) {}
}

export class WorkflowCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowCancelledEvent';
  constructor(public readonly instanceId: string) {}
}

export class WorkflowFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'WorkflowFailedEvent';
  constructor(
    public readonly instanceId: string,
    public readonly reason: string,
  ) {}
}
