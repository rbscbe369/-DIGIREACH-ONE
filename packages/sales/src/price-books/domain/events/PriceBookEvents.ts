export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class PriceBookCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PriceBookCreatedEvent';
  constructor(public readonly priceBookId: string) {}
}

export class PriceBookActivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PriceBookActivatedEvent';
  constructor(public readonly priceBookId: string) {}
}

export class PriceBookEntryAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'PriceBookEntryAddedEvent';
  constructor(
    public readonly priceBookId: string,
    public readonly entryId: string,
    public readonly productVersionId: string,
  ) {}
}
