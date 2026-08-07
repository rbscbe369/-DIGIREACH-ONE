export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}
export class MasterDataInitializedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataInitializedEvent';
}
export class MasterDataConfiguredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataConfiguredEvent';
}
export class MasterDataDomainRegisteredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataDomainRegisteredEvent';
}
export class MasterDataDomainEnabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataDomainEnabledEvent';
}
export class MasterDataDomainDisabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataDomainDisabledEvent';
}
export class MasterDataConfigurationChangedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataConfigurationChangedEvent';
}
export class MasterDataClassificationCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataClassificationCreatedEvent';
}
export class MasterDataReferenceRegisteredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'MasterDataReferenceRegisteredEvent';
}
