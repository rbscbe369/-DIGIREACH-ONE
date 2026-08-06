export class WorkspaceWidgetDefinition {
  constructor(
    public readonly widgetId: string,
    public readonly name: string,
    public readonly moduleRef: string,
    public readonly defaultWidth: number,
    public readonly defaultHeight: number,
    public readonly minWidth: number,
    public readonly minHeight: number,
  ) {}
}
