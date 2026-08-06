export type ActivityTypeValue =
  | 'TASK'
  | 'CALL'
  | 'EMAIL'
  | 'SMS'
  | 'WHATSAPP'
  | 'MEETING'
  | 'VISIT'
  | 'PRESENTATION'
  | 'DEMO'
  | 'TRAINING'
  | 'APPROVAL'
  | 'REVIEW'
  | 'REMINDER'
  | 'FOLLOW_UP'
  | 'DOCUMENT_REVIEW'
  | 'INSPECTION'
  | 'SURVEY'
  | 'CUSTOM';

export class ActivityType {
  constructor(
    public readonly value: ActivityTypeValue,
    public readonly customName: string | null,
  ) {}
}
