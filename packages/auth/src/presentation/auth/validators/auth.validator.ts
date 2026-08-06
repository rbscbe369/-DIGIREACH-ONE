import { z } from 'zod';

export const LoginBodySchema = z.object({
  provider: z.string().default('PASSWORD'),
  email: z.string().email().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

export const RefreshBodySchema = z.object({
  refreshToken: z.string().min(1),
});
