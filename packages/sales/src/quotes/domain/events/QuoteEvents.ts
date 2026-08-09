export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class QuoteCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'QuoteCreatedEvent';
  constructor(public readonly quoteId: string) {}
}

export class QuoteStatusChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'QuoteStatusChangedEvent';
  constructor(
    public readonly quoteId: string,
    public readonly oldStatus: string,
    public readonly newStatus: string,
  ) {}
}
