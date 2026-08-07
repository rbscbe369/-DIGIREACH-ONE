export class ProductAuditReference {
  constructor(
    public readonly createdBy: string,
    public readonly updatedBy: string,
    public readonly approvedBy: string | null,
    public readonly archivedBy: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly publishedAt: Date | null,
    public readonly archivedAt: Date | null,
  ) {}
}
