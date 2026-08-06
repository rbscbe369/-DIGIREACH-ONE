export class CRMModule {
  constructor(
    public readonly moduleId: string,
    public readonly name: string,
    public readonly version: string,
    public readonly dependencies: string[],
    public readonly capabilities: string[],
    public readonly featureFlags: Record<string, boolean>,
    public readonly status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE',
    public readonly visibility: 'PUBLIC' | 'INTERNAL' | 'DEPRECATED',
  ) {}
}
