export class OpportunityIdentity {
  constructor(
    public readonly opportunityNumber: string,
    public readonly externalId: string | null,
    public readonly referenceNumber: string | null,
    public readonly sourceSystem: string | null,
    public readonly legacyReference: string | null,
    public readonly crmReference: string | null,
    public readonly quoteReference: string | null,
    public readonly orderReference: string | null,
    public readonly contractReference: string | null,
    public readonly projectReference: string | null,
    public readonly invoiceReference: string | null,
  ) {}
}
