export class AssignWorkspaceCommand {
  constructor(
    public readonly userId: string,
    public readonly hierarchyNodeId: string,
    public readonly personaId: string,
    public readonly adminUserId: string
  ) {}
}