import { z } from 'zod';
import { AuditCategory } from '../../domain/value-objects/audit-category.vo';
import { AuditSeverity } from '../../domain/value-objects/audit-severity.vo';

export const SearchAuditDto = z.object({
  correlationId: z.string().optional(),
  traceId: z.string().optional(),
  organizationId: z.string().optional(),
  actorId: z.string().optional(),
  targetId: z.string().optional(),
  category: z.nativeEnum(AuditCategory).optional(),
  severity: z.nativeEnum(AuditSeverity).optional(),
  startTime: z.string().datetime().optional(),
  endTime: z.string().datetime().optional(),
});

export const TimelineParamsDto = z.object({
  targetId: z.string().min(1),
});
