import { z } from 'zod';
export const MasterDataHealthDto = z.object({ status: z.string() });
