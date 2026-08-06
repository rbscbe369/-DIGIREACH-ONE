export class CRMMetadata {
  constructor(
    public readonly tenantId: string,
    public readonly environment: string,
    public readonly regionalSettings: Record<string, unknown>,
    public readonly customFields: Record<string, unknown>,
  ) {}
}
