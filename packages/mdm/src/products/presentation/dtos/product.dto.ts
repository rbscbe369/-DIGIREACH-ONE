import { z } from 'zod';
export const CreateProductDto = z.object({ sku: z.string() });
