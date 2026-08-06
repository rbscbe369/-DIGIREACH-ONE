export class ConfigurationKey {
  constructor(public readonly value: string) {
    if (!/^[a-zA-Z0-9_.-]+$/.test(value)) {
      throw new Error('Invalid configuration key format.');
    }
  }
}

export class ConfigurationValue {
  constructor(
    public readonly value: unknown,
    public readonly type: 'string' | 'number' | 'boolean' | 'json',
  ) {}
}
