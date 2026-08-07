export class ProductIdentifierCollection {
  constructor(
    public readonly internalId: string,
    public readonly sku: string,
    public readonly barcode: string | null,
    public readonly upc: string | null,
    public readonly ean: string | null,
    public readonly gtin: string | null,
    public readonly isbn: string | null,
    public readonly oemNumber: string | null,
    public readonly vendorPartNumber: string | null,
    public readonly legacyErpCode: string | null,
    public readonly externalReference: string | null,
    public readonly governmentRegistration: string | null,
    public readonly commodityCode: string | null,
    public readonly hsCode: string | null,
  ) {}
}
