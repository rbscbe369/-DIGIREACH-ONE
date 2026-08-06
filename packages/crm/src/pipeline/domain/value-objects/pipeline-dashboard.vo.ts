export class PipelineDashboard {
  constructor(
    public readonly layoutId: string,
    public readonly defaultFilters: Record<string, unknown>,
  ) {}
}
