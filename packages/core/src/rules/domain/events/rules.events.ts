export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class RuleEvaluatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RuleEvaluatedEvent';
  constructor(public readonly executionId: string) {}
}

export class RuleMatchedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RuleMatchedEvent';
  constructor(public readonly ruleId: string) {}
}

export class RuleFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RuleFailedEvent';
  constructor(
    public readonly ruleId: string,
    public readonly reason: string,
  ) {}
}

export class DecisionTableEvaluatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DecisionTableEvaluatedEvent';
  constructor(public readonly decisionTableId: string) {}
}

export class RuleSetPublishedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RuleSetPublishedEvent';
  constructor(
    public readonly ruleSetId: string,
    public readonly versionId: string,
  ) {}
}

export class RuleVersionCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RuleVersionCreatedEvent';
  constructor(
    public readonly ruleSetId: string,
    public readonly versionId: string,
  ) {}
}
