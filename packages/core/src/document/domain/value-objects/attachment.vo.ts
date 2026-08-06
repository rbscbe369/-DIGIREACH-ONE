export class Attachment {
  constructor(
    public readonly entityType: string,
    public readonly entityId: string,
    public readonly relationshipType: string,
  ) {}
}
