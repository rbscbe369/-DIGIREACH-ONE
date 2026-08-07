export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}
export class ProductCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductCreatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductUpdatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductArchivedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductActivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductActivatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductDeactivatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductDeactivatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductCategoryCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductCategoryCreatedEvent';
  constructor(public readonly categoryId: string) {}
}
export class ProductFamilyCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductFamilyCreatedEvent';
  constructor(public readonly familyId: string) {}
}
export class ProductVariantCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductVariantCreatedEvent';
  constructor(public readonly variantId: string) {}
}
export class ProductBundleCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductBundleCreatedEvent';
  constructor(public readonly bundleId: string) {}
}
export class ProductRelationshipCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductRelationshipCreatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductPublishedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductPublishedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductVersionCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductVersionCreatedEvent';
  constructor(public readonly productVersionId: string) {}
}
export class ProductRevisionCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductRevisionCreatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductDeprecatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductDeprecatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductRetiredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductRetiredEvent';
  constructor(public readonly productId: string) {}
}
export class ProductDuplicatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductDuplicatedEvent';
  constructor(public readonly productId: string) {}
}
export class ProductRestoredEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductRestoredEvent';
  constructor(public readonly productId: string) {}
}
export class ProductAssetAddedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductAssetAddedEvent';
  constructor(public readonly assetId: string) {}
}
export class ProductAssetRemovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductAssetRemovedEvent';
  constructor(public readonly assetId: string) {}
}
export class ProductVersionApprovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'ProductVersionApprovedEvent';
  constructor(public readonly productVersionId: string) {}
}
