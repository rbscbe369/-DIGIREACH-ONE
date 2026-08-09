// Strict presentation DTOs for the API boundary
// In a real Fastify app, this would use Zod.
export interface CreateContractRequestDto {
  tenantId: string;
  organizationId: string;
  startDate: string;
  endDate: string | null;
  noticePeriodDays: number | null;
  renewalType: 'AutoRenew' | 'ManualRenewal' | 'None';
  renewalTermMonths: number | null;
  slas: string[];
  originatingOrderId?: string;
  originatingQuoteId?: string;
}
