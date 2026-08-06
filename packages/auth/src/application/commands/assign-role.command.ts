export class AssignRoleCommand {
  constructor(
    public readonly personaId: string,
    public readonly roleId: string,
    public readonly adminUserId: string,
  ) {}
}
