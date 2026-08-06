export class RetentionPolicy {
  constructor(
    public readonly archiveAfterDays: number | null,
    public readonly deleteAfterDays: number | null,
  ) {}
}
