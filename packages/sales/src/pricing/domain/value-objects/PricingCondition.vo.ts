export interface PricingCondition {
  readonly type: 'quantity' | 'segment' | 'channel' | 'region';
  isSatisfiedBy(context: unknown): boolean; // We will narrow this below
}

export class QuantityCondition implements PricingCondition {
  public readonly type = 'quantity';
  constructor(public readonly minQuantity: number | null, public readonly maxQuantity: number | null) {}

  public isSatisfiedBy(context: { quantity: number }): boolean {
    if (this.minQuantity !== null && context.quantity < this.minQuantity) return false;
    if (this.maxQuantity !== null && context.quantity > this.maxQuantity) return false;
    return true;
  }
}

export class ChannelCondition implements PricingCondition {
  public readonly type = 'channel';
  constructor(public readonly requiredChannel: string) {}

  public isSatisfiedBy(context: { channel: string | null }): boolean {
    return context.channel === this.requiredChannel;
  }
}

export class RegionCondition implements PricingCondition {
  public readonly type = 'region';
  constructor(public readonly requiredRegion: string) {}

  public isSatisfiedBy(context: { region: string | null }): boolean {
    return context.region === this.requiredRegion;
  }
}
