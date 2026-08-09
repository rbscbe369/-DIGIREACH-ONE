export interface QuoteRequestDto {
  tenantId?: string;
  organizationId?: string;
  customerReference: string;
  currency: string;
  notes?: string;
}
