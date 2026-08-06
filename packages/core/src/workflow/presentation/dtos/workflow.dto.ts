import { z } from 'zod';

export const StartWorkflowDto = z.object({
  definitionId: z.string(),
  versionId: z.string(),
});
