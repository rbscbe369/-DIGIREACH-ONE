export class WorkspaceBreakpointProfile {
  constructor(
    public readonly name: string,
    public readonly minWidth: number,
    public readonly maxWidth: number | null,
    public readonly gridColumns: number,
    public readonly containerPadding: number,
  ) {}
}
