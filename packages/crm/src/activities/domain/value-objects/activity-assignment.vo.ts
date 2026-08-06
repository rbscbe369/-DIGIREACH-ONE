export class ActivityAssignment {
  constructor(
    public readonly assignedToId: string | null,
    public readonly assignedById: string | null,
    public readonly assignedAt: Date | null,
  ) {}
}
