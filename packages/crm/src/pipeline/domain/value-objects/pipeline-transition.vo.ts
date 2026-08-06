export class PipelineTransition {
  constructor(
    public readonly sourceStageId: string,
    public readonly targetStageId: string,
    public readonly approvalRequired: boolean,
    public readonly validationRules: string[],
    public readonly automationHooks: string[],
    public readonly requiredFields: string[],
    public readonly rollbackAllowed: boolean,
  ) {}
}
