import { z } from 'zod';

export const OrganizationPathParamsSchema = z.object({
  id: z.string().min(1, 'ID is required')
});

export const CreateOrganizationBodySchema = z.object({
  name: z.string().min(1).optional(),
});

export const UpdateOrganizationBodySchema = z.object({
  name: z.string().min(1).optional()
});

export const OrganizationQuerySchema = z.object({
  page: z.string().optional(),
  limit: z.string().optional()
});
