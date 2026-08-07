export interface PricingEvaluationRequestDto {
  tenantId?: string;
  organizationId?: string;
  productVersionId: string;
  priceBookId: string;
  priceBookEntryId?: string;
  quantity: number;
  basePrice: number;
  currency: string;
  channel?: string;
  region?: string;
  customerReference?: string;
}
