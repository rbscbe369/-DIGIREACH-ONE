import { z } from 'zod';

export const BuildCustomer360Dto = z.object({
  customerId: z.string(),
});
