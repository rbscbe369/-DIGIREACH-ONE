import { z } from 'zod';

export const CreateActivityDto = z.object({
  type: z.string(),
  referenceId: z.string().optional(),
});
