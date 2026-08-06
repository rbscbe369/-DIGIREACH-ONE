import { z } from 'zod';

export const PermissionPathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required'),
});

export const CreatePermissionBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdatePermissionBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const PermissionQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});
