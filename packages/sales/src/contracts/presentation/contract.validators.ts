import { z } from 'zod';

export const CreateContractSchema = z.object({
  tenantId: z.string().min(1),
  organizationId: z.string().min(1),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().nullable(),
  noticePeriodDays: z.number().int().min(0).nullable(),
  renewalType: z.enum(['AutoRenew', 'ManualRenewal', 'None']),
  renewalTermMonths: z.number().int().min(1).nullable(),
  slas: z.array(z.string()),
  originatingOrderId: z.string().optional(),
  originatingQuoteId: z.string().optional(),
});
