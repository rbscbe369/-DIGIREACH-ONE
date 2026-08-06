import { z } from 'zod';

export const SessionPathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required'),
});

export const CreateSessionBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdateSessionBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const SessionQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});
