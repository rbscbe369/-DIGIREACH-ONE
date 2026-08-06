export class WorkspaceModule {
  constructor(
    public readonly moduleId: string,
    public readonly name: string,
    public readonly version: string,
    public readonly entryPoint: string,
    public readonly isCore: boolean,
  ) {}
}
