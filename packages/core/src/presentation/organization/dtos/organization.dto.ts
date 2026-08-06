import { z } from 'zod';

export const MoveNodeDto = z.object({
  newParentId: z.string().min(1),
});

export const MoveNodeParamsDto = z.object({
  nodeId: z.string().min(1),
});
