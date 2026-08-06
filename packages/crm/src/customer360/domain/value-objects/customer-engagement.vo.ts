export class CustomerEngagement {
  constructor(
    public readonly score: number,
    public readonly trend: 'UP' | 'DOWN' | 'STABLE',
    public readonly lastEngagementDate: Date | null,
  ) {}
}
