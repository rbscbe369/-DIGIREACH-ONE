export class CustomerCommunicationProfile {
  constructor(
    public readonly preferredChannel: string | null,
    public readonly lastCommunicationDate: Date | null,
    public readonly optOutList: string[],
  ) {}
}
