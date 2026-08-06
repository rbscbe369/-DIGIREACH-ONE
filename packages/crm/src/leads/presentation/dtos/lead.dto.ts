import { z } from 'zod';

export const CreateLeadDto = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().optional(),
  company: z.string().optional(),
});
