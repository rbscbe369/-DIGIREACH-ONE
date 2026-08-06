import { DomainEvent } from './pipeline.events';

export class StageCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'StageCreatedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly stageId: string,
  ) {}
}

export class StageUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'StageUpdatedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly stageId: string,
  ) {}
}

export class StageDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'StageDeletedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly stageId: string,
  ) {}
}

export class StageMovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'StageMovedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly stageId: string,
    public readonly newOrder: number,
  ) {}
}

export class StageProbabilityChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'StageProbabilityChangedEvent';
  constructor(
    public readonly pipelineId: string,
    public readonly stageId: string,
    public readonly newProbability: number,
  ) {}
}
