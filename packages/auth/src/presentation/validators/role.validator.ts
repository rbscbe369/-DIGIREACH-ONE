import { z } from 'zod';

export const RolePathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required')
});

export const CreateRoleBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdateRoleBodySchema = z.object({
  name: z.string().min(1).optional()
});

export const RoleQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional()
});
