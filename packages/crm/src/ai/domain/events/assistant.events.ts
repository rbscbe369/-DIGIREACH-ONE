export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}
export class AssistantConversationStartedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AssistantConversationStartedEvent';
  constructor(public readonly conversationId: string) {}
}
export class AssistantConversationEndedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'AssistantConversationEndedEvent';
  constructor(public readonly conversationId: string) {}
}
export class InsightGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'InsightGeneratedEvent';
  constructor(public readonly insightType: string) {}
}
export class RecommendationGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'RecommendationGeneratedEvent';
  constructor(public readonly targetId: string) {}
}
export class SummaryGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'SummaryGeneratedEvent';
  constructor(public readonly sourceId: string) {}
}
export class ForecastGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ForecastGeneratedEvent';
  constructor(public readonly period: string) {}
}
export class CoachingGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'CoachingGeneratedEvent';
  constructor(public readonly targetUserId: string) {}
}
export class NextBestActionGeneratedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'NextBestActionGeneratedEvent';
  constructor(public readonly targetEntityId: string) {}
}
