export class CRMConfiguration {
  constructor(
    public readonly general: Record<string, unknown>,
    public readonly leads: Record<string, unknown>,
    public readonly pipeline: Record<string, unknown>,
    public readonly activities: Record<string, unknown>,
    public readonly ai: Record<string, unknown>,
    public readonly automation: Record<string, unknown>,
    public readonly notifications: Record<string, unknown>,
    public readonly search: Record<string, unknown>,
  ) {}
}
