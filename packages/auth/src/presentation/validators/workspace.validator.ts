import { z } from 'zod';

export const WorkspacePathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required'),
});

export const CreateWorkspaceBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdateWorkspaceBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const WorkspaceQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional(),
});
