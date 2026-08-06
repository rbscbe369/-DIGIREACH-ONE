import { z } from 'zod';

export const CreateContactDto = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email().optional(),
  type: z.enum([
    'INDIVIDUAL',
    'BUSINESS',
    'CUSTOMER',
    'PROSPECT',
    'PARTNER',
    'VENDOR',
    'EMPLOYEE',
    'INFLUENCER',
    'OTHER',
  ]),
});
