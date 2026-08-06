import { z } from 'zod';

export const InitializeCRMDto = z.object({
  tenantId: z.string(),
});

export const UpdateCRMConfigurationDto = z.object({
  tenantId: z.string(),
  config: z.record(z.unknown()),
});
