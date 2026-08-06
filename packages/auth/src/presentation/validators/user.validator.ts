import { z } from 'zod';

export const UserPathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required'),
});

export const CreateUserBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdateUserBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UserQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});
