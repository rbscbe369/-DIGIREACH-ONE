export class PipelineIdentity {
  constructor(
    public readonly pipelineNumber: string,
    public readonly externalId: string | null,
    public readonly internalCode: string | null,
    public readonly version: string,
    public readonly category: string | null,
    public readonly visibility: string,
    public readonly isDefault: boolean,
  ) {}
}
