import { EventReference } from '../value-objects/event-reference.vo';
import { EventAttachment } from '../value-objects/event-attachment.vo';

export class CalendarEvent {
  constructor(
    public readonly eventId: string,
    public title: string,
    public description: string | null,
    public category: string,
    public type: string,
    public priority: string,
    public status: string,
    public location: string | null,
    public timeZone: string,
    public startTime: Date,
    public endTime: Date,
    public durationMinutes: number,
    public color: string | null,
    public attachments: EventAttachment[],
    public references: EventReference[],
  ) {}
}
