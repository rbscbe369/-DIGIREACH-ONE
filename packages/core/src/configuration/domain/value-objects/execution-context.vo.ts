export class ExecutionContext {
  constructor(
    public readonly platformId: string,
    public readonly organizationId: string | null = null,
    public readonly legalEntityId: string | null = null,
    public readonly businessUnitId: string | null = null,
    public readonly divisionId: string | null = null,
    public readonly regionId: string | null = null,
    public readonly branchId: string | null = null,
    public readonly departmentId: string | null = null,
    public readonly teamId: string | null = null,
    public readonly workspaceId: string | null = null,
    public readonly roleIds: string[] = [],
    public readonly userId: string | null = null,
  ) {}
}
