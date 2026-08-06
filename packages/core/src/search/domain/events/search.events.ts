export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class SearchExecutedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SearchExecutedEvent';
  constructor(
    public readonly queryText: string,
    public readonly resultCount: number,
  ) {}
}

export class SearchIndexedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SearchIndexedEvent';
  constructor(
    public readonly documentId: string,
    public readonly indexName: string,
  ) {}
}

export class SearchRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SearchRemovedEvent';
  constructor(
    public readonly documentId: string,
    public readonly indexName: string,
  ) {}
}

export class SearchFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SearchFailedEvent';
  constructor(
    public readonly queryText: string,
    public readonly reason: string,
  ) {}
}

export class SearchSuggestedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SearchSuggestedEvent';
  constructor(public readonly queryText: string) {}
}
