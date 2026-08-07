import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class ProductBundle {
  constructor(
    public readonly bundleId: string,
    public audit: ProductAuditReference,
  ) {}
}
