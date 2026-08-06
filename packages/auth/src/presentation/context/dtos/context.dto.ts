import { z } from 'zod';

export const SwitchContextDto = z.object({
  workspaceId: z.string().min(1),
});

export type SwitchContextDtoType = z.infer<typeof SwitchContextDto>;
