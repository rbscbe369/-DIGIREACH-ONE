import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class ProductFamily {
  constructor(
    public readonly familyId: string,
    public readonly name: string,
    public audit: ProductAuditReference,
  ) {}
}
