export class ActivityCommunication {
  constructor(
    public readonly channel: string,
    public readonly externalId: string | null,
    public readonly timestamp: Date,
  ) {}
}
