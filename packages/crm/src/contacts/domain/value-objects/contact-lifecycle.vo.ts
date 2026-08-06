export class ContactLifecycle {
  constructor(
    public readonly isArchived: boolean,
    public readonly createdAt: Date,
    public readonly lastActivityAt: Date | null,
  ) {}
}
