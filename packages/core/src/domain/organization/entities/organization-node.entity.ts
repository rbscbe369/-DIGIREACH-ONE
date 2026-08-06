export class OrganizationNode {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly parentId: string | null,
    public readonly nodeType: string,
    public readonly name: string,
    public readonly materializedPath: string,
    public readonly depth: number,
    public readonly isActive: boolean,
  ) {}
}
