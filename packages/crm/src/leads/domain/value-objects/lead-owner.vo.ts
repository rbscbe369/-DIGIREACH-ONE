export class LeadOwner {
  constructor(
    public readonly ownerId: string,
    public readonly teamId: string | null,
    public readonly departmentId: string | null,
  ) {}
}
