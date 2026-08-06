export class NotificationTemplate {
  constructor(
    public readonly templateId: string,
    public readonly name: string,
    public readonly rawBody: string,
    public readonly subjectTemplate: string | null,
    public readonly version: string,
  ) {}
}
