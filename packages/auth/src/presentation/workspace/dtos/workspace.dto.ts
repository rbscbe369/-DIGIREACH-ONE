import { z } from 'zod';

export const GetWorkspaceProfileParamsDto = z.object({
  profileId: z.string().optional(),
});
