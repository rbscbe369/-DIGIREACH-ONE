export class ActivityIdentity {
  constructor(
    public readonly activityNumber: string,
    public readonly externalId: string | null,
    public readonly referenceNumber: string | null,
    public readonly sourceSystem: string | null,
    public readonly correlationId: string | null,
    public readonly legacyReference: string | null,
  ) {}
}
