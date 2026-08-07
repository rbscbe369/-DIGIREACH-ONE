import { z } from 'zod';
export const SalesHealthDto = z.object({ status: z.string() });
