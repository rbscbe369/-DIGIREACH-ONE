export class PipelineKanban {
  constructor(
    public readonly columnWidth: number,
    public readonly cardLayout: string,
    public readonly cardFields: string[],
    public readonly swimlanes: string[],
    public readonly grouping: string | null,
    public readonly sorting: string | null,
    public readonly collapsedColumns: string[],
    public readonly filters: string[],
  ) {}
}
