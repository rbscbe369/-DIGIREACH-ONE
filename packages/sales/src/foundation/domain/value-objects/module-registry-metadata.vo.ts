export class ModuleRegistryMetadata {
  constructor(
    public readonly dependsOn: string[],
    public readonly requiredCapabilities: string[],
    public readonly optionalCapabilities: string[],
    public readonly versionCompatibility: string,
  ) {}
}
