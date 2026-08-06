export class SwitchWorkspaceCommand {
  constructor(
    public readonly userId: string,
    public readonly workspaceId: string,
  ) {}
}
