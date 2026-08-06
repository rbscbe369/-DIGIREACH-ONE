import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { SessionController } from '../controllers/session.controller';

export async function sessionRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Sessions'],
      summary: 'Session GET /',
    },
    handler: SessionController.list,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: {
      tags: ['Sessions'],
      summary: 'Session DELETE /:id',
    },
    handler: SessionController.delete,
  });
}
