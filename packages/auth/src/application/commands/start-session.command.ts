export class StartSessionCommand {
  constructor(
    public readonly userId: string,
    public readonly deviceFingerprint: string,
    public readonly targetWorkspaceId: string | null,
  ) {}
}
