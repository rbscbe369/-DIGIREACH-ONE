import { z } from 'zod';

export const ForecastQuerySchema = z.object({
  tenantId: z.string().min(1),
  organizationId: z.string().nullable().optional(),
  currency: z.string().length(3),
  periodType: z.enum(['Day', 'Week', 'Month', 'Quarter', 'Year']),
  date: z.string().datetime(),
});

export const HistoricalCloseRateQuerySchema = z.object({
  tenantId: z.string().min(1),
  organizationId: z.string().nullable().optional(),
  currency: z.string().length(3),
});

export const RepPerformanceQuerySchema = z.object({
  tenantId: z.string().min(1),
  organizationId: z.string().nullable().optional(),
  currency: z.string().length(3),
  ownerId: z.string().min(1),
});
