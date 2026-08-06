export class CustomerAlert {
  constructor(
    public readonly alertId: string,
    public readonly severity: 'INFO' | 'WARNING' | 'CRITICAL',
    public readonly message: string,
    public readonly timestamp: Date,
  ) {}
}
