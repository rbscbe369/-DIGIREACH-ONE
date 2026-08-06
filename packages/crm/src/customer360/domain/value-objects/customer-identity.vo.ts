export class CustomerIdentity {
  constructor(
    public readonly customerNumber: string,
    public readonly globalCustomerId: string | null,
    public readonly externalId: string | null,
    public readonly masterCustomerId: string | null,
    public readonly sourceSystems: string[],
    public readonly mergedCustomerIds: string[],
  ) {}
}
