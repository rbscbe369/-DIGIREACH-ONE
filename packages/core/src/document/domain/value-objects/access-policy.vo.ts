export class AccessPolicy {
  constructor(
    public readonly allowedOrganizationIds: string[] = [],
    public readonly allowedRoleIds: string[] = [],
    public readonly allowedUserIds: string[] = [],
  ) {}
}
