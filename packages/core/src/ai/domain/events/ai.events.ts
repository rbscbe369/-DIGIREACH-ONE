export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class AIRequestStartedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIRequestStartedEvent';
  constructor(
    public readonly requestId: string,
    public readonly modelId: string,
  ) {}
}

export class AIRequestCompletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIRequestCompletedEvent';
  constructor(
    public readonly requestId: string,
    public readonly totalTokens: number,
    public readonly costUsd: number,
  ) {}
}

export class AIRequestFailedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIRequestFailedEvent';
  constructor(
    public readonly requestId: string,
    public readonly reason: string,
  ) {}
}

export class AIQuotaExceededEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIQuotaExceededEvent';
  constructor(
    public readonly organizationId: string,
    public readonly requiredTokens: number,
  ) {}
}

export class AIProviderUnavailableEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIProviderUnavailableEvent';
  constructor(public readonly providerId: string) {}
}

export class AIModelSelectedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIModelSelectedEvent';
  constructor(
    public readonly taskId: string,
    public readonly modelId: string,
  ) {}
}

export class AIFallbackExecutedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AIFallbackExecutedEvent';
  constructor(
    public readonly originalModelId: string,
    public readonly fallbackModelId: string,
  ) {}
}
