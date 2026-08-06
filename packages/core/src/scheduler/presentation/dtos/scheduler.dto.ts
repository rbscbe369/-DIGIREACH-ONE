import { z } from 'zod';

export const CreateScheduleDto = z.object({
  name: z.string(),
  type: z.enum(['ONE_TIME', 'RECURRING', 'INTERVAL', 'EVENT_DRIVEN', 'MANUAL', 'CALENDAR_BASED']),
  payloadTemplate: z.record(z.unknown()),
  startAt: z.string().datetime(),
});
