export type EventReferenceType =
  | 'LEAD'
  | 'CONTACT'
  | 'ACCOUNT'
  | 'OPPORTUNITY'
  | 'ACTIVITY'
  | 'WORKFLOW'
  | 'DOCUMENT'
  | 'ORGANIZATION'
  | 'USER'
  | 'PROJECT'
  | 'TICKET';
export class EventReference {
  constructor(
    public readonly targetId: string,
    public readonly referenceType: EventReferenceType,
  ) {}
}
