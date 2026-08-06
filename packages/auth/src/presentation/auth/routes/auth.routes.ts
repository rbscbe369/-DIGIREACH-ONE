import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { AuthController } from '../controllers/auth.controller';
import { LoginBodySchema, RefreshBodySchema } from '../validators/auth.validator';

export async function authRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.post('/login', {
    schema: {
      tags: ['Authentication'],
      summary: 'Login using an authentication provider',
      body: LoginBodySchema,
    },
    handler: AuthController.login,
  });

  fastify.post('/logout', {
    schema: {
      tags: ['Authentication'],
      summary: 'Logout current session',
    },
    handler: AuthController.logout,
  });

  fastify.post('/refresh', {
    schema: {
      tags: ['Authentication'],
      summary: 'Refresh access token',
      body: RefreshBodySchema,
    },
    handler: AuthController.refresh,
  });
}
