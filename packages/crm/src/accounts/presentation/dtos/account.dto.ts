import { z } from 'zod';

export const CreateAccountDto = z.object({
  companyName: z.string(),
  type: z.enum([
    'CUSTOMER',
    'PROSPECT',
    'PARTNER',
    'VENDOR',
    'SUPPLIER',
    'DISTRIBUTOR',
    'DEALER',
    'GOVERNMENT',
    'EDUCATIONAL_INSTITUTION',
    'HOSPITAL',
    'NGO',
    'INDIVIDUAL_BUSINESS',
    'CORPORATE',
    'ENTERPRISE',
    'OTHER',
  ]),
});
