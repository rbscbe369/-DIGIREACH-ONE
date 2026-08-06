export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class Customer360CreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'Customer360CreatedEvent';
  constructor(public readonly customerId: string) {}
}

export class Customer360UpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'Customer360UpdatedEvent';
  constructor(public readonly customerId: string) {}
}

export class CustomerInsightGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerInsightGeneratedEvent';
  constructor(
    public readonly customerId: string,
    public readonly insightId: string,
  ) {}
}

export class CustomerHealthChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerHealthChangedEvent';
  constructor(public readonly customerId: string) {}
}

export class CustomerRiskChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerRiskChangedEvent';
  constructor(public readonly customerId: string) {}
}

export class CustomerSegmentChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerSegmentChangedEvent';
  constructor(public readonly customerId: string) {}
}

export class CustomerJourneyUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerJourneyUpdatedEvent';
  constructor(public readonly customerId: string) {}
}

export class CustomerRecommendationGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CustomerRecommendationGeneratedEvent';
  constructor(
    public readonly customerId: string,
    public readonly recommendationId: string,
  ) {}
}
