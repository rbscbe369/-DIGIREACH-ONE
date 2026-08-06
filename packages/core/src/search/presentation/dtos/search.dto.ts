import { z } from 'zod';

export const ExecuteSearchDto = z.object({
  query: z.string(),
  page: z.number().optional().default(1),
});
