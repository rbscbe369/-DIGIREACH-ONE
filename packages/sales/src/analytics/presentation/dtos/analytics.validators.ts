import { z } from 'zod';

export const AnalyticsQuerySchema = z.object({
  tenantId: z.string().min(1),
  organizationId: z.string().optional(),
  currency: z.string().length(3),
  periodType: z.enum(['Day', 'Week', 'Month', 'Quarter', 'Year', 'Custom']),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
});
