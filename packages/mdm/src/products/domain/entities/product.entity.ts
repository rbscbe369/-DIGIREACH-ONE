import { ProductIdentifierCollection } from '../value-objects/product-identifier-collection.vo';
import { ProductAuditReference } from '../value-objects/product-audit-reference.vo';
export class Product {
  constructor(
    public readonly productId: string,
    public identifiers: ProductIdentifierCollection,
    public audit: ProductAuditReference,
  ) {}
}
