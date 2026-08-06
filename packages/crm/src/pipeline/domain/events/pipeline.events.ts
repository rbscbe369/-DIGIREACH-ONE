export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class PipelineCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineCreatedEvent';
  constructor(public readonly pipelineId: string) {}
}

export class PipelineUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineUpdatedEvent';
  constructor(public readonly pipelineId: string) {}
}

export class PipelineDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineDeletedEvent';
  constructor(public readonly pipelineId: string) {}
}

export class PipelineActivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineActivatedEvent';
  constructor(public readonly pipelineId: string) {}
}

export class PipelineDeactivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineDeactivatedEvent';
  constructor(public readonly pipelineId: string) {}
}

export class PipelineAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineAssignedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly assigneeId: string,
  ) {}
}

export class PipelineGoalChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PipelineGoalChangedEvent';
  constructor(public readonly pipelineId: string) {}
}
