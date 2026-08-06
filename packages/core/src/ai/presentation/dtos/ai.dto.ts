import { z } from 'zod';

export const ExecuteAITaskDto = z.object({
  taskId: z.string(),
  variables: z.record(z.unknown()),
});
