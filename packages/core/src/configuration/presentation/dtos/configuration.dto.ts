import { z } from 'zod';

export const ResolveConfigParamsDto = z.object({
  key: z.string().min(1),
});

export const ResolveConfigResponseDto = z.object({
  key: z.string(),
  value: z.any(),
});
