export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class OrderCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'OrderCreatedEvent';
  constructor(
    public readonly orderId: string,
    public readonly quoteId: string,
  ) {}
}
