export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class OpportunityCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCreatedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityUpdatedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityAssignedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityAssignedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly assigneeId: string,
  ) {}
}

export class OpportunityStageChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityStageChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newStage: string,
  ) {}
}

export class OpportunityProbabilityChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityProbabilityChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newProbability: number,
  ) {}
}

export class OpportunityForecastChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityForecastChangedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly newForecast: string,
  ) {}
}

export class OpportunityWonEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityWonEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityLostEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityLostEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityCancelledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCancelledEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityReopenedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityReopenedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityArchivedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityDeletedEvent';
  constructor(public readonly opportunityId: string) {}
}

export class OpportunityCompetitorAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityCompetitorAddedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly competitorName: string,
  ) {}
}

export class OpportunityStakeholderAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OpportunityStakeholderAddedEvent';
  constructor(
    public readonly opportunityId: string,
    public readonly contactId: string,
  ) {}
}
