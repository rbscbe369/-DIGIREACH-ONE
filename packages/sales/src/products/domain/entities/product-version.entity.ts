import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class ProductVersion {
  constructor(
    public readonly productVersionId: string,
    public readonly productId: string,
    public readonly versionTag: string,
    public audit: ProductAuditReference,
  ) {}
}
