export type ActivityReferenceType =
  | 'LEAD'
  | 'CONTACT'
  | 'ACCOUNT'
  | 'OPPORTUNITY'
  | 'DOCUMENT'
  | 'WORKFLOW'
  | 'ORGANIZATION'
  | 'USER'
  | 'PROJECT'
  | 'TICKET';

export class ActivityReference {
  constructor(
    public readonly targetId: string,
    public readonly referenceType: ActivityReferenceType,
  ) {}
}
