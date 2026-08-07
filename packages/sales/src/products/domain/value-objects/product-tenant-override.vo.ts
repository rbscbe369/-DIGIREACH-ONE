export class ProductTenantOverride {
  constructor(
    public readonly organizationOverrides: Record<string, unknown>,
    public readonly regionOverrides: Record<string, unknown>,
    public readonly localizationOverrides: Record<string, unknown>,
    public readonly featureOverrides: Record<string, unknown>,
  ) {}
}
