import { DomainEvent } from './calendar.events';
export class ParticipantInvitedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantInvitedEvent';
  constructor(
    public readonly meetingId: string,
    public readonly participantId: string,
  ) {}
}
export class ParticipantAcceptedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantAcceptedEvent';
  constructor(
    public readonly meetingId: string,
    public readonly participantId: string,
  ) {}
}
export class ParticipantDeclinedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantDeclinedEvent';
  constructor(
    public readonly meetingId: string,
    public readonly participantId: string,
  ) {}
}
export class ParticipantTentativeEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ParticipantTentativeEvent';
  constructor(
    public readonly meetingId: string,
    public readonly participantId: string,
  ) {}
}
