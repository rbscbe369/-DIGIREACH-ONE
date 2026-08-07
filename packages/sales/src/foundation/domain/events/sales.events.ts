export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}
export class SalesInitializedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesInitializedEvent';
}
export class SalesConfiguredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesConfiguredEvent';
}
export class SalesModuleRegisteredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesModuleRegisteredEvent';
}
export class SalesModuleEnabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesModuleEnabledEvent';
}
export class SalesModuleDisabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesModuleDisabledEvent';
}
export class SalesConfigurationChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesConfigurationChangedEvent';
}
export class SalesPolicyChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesPolicyChangedEvent';
}
export class SalesStatisticsUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SalesStatisticsUpdatedEvent';
}
