import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class ProductCategory {
  constructor(
    public readonly categoryId: string,
    public readonly name: string,
    public audit: ProductAuditReference,
  ) {}
}
