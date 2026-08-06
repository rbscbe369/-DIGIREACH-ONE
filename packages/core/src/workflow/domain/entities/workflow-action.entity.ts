export class WorkflowAction {
  constructor(
    public readonly id: string,
    public readonly providerName: string,
    public readonly actionName: string,
    public readonly payloadTemplate: Record<string, unknown>,
    public readonly isCompensation: boolean = false,
  ) {}
}
