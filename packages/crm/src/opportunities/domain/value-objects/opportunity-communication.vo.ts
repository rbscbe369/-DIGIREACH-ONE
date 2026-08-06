export class OpportunityCommunication {
  constructor(
    public readonly communicationId: string,
    public readonly channel: string,
    public readonly timestamp: Date,
  ) {}
}
