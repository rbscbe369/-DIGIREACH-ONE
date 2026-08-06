import { z } from 'zod';

export const CreatePipelineDto = z.object({
  name: z.string(),
  description: z.string().optional(),
});
