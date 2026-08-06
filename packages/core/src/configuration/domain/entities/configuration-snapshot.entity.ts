export class ConfigurationSnapshot {
  constructor(
    public readonly snapshotId: string,
    public readonly targetScope: string,
    public readonly targetScopeId: string,
    public readonly timestamp: Date,
    public readonly payload: Record<string, unknown>,
  ) {}
}

export class ConfigurationHistory {
  constructor(
    public readonly historyId: string,
    public readonly configurationId: string,
    public readonly timestamp: Date,
    public readonly oldValue: unknown,
    public readonly newValue: unknown,
    public readonly changedBy: string,
  ) {}
}
