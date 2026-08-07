export class MasterDataDomain {
  constructor(
    public readonly domainId: string,
    public readonly domainOwner: string,
    public readonly version: string,
    public readonly enabled: boolean,
    public readonly dependencies: string[],
    public readonly status: string,
  ) {}
}
