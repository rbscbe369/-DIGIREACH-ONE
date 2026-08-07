import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class ProductVariant {
  constructor(
    public readonly variantId: string,
    public readonly productId: string,
    public audit: ProductAuditReference,
  ) {}
}
