import { z } from 'zod';
export const CreateCalendarDto = z.object({
  name: z.string(),
  type: z.string(),
});
export const ScheduleMeetingDto = z.object({
  subject: z.string(),
  startTime: z.string(),
  endTime: z.string(),
});
