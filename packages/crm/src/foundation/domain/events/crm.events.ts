export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class CRMInitializedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMInitializedEvent';
  constructor(public readonly tenantId: string) {}
}

export class CRMConfiguredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMConfiguredEvent';
  constructor(public readonly tenantId: string) {}
}

export class CRMSettingsUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMSettingsUpdatedEvent';
  constructor(
    public readonly tenantId: string,
    public readonly settingsKey: string,
  ) {}
}

export class CRMModuleRegisteredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMModuleRegisteredEvent';
  constructor(public readonly moduleId: string) {}
}

export class CRMModuleEnabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMModuleEnabledEvent';
  constructor(public readonly moduleId: string) {}
}

export class CRMModuleDisabledEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CRMModuleDisabledEvent';
  constructor(public readonly moduleId: string) {}
}
