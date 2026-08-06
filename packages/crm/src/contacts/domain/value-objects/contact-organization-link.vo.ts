export class ContactOrganizationLink {
  constructor(
    public readonly organizationId: string,
    public readonly role: string | null,
    public readonly department: string | null,
    public readonly designation: string | null,
    public readonly isPrimary: boolean,
    public readonly startDate: Date | null,
    public readonly endDate: Date | null,
  ) {}
}
