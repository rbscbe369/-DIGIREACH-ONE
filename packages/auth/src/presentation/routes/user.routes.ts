import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { UserController } from '../controllers/user.controller';

export async function userRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: {
      tags: ['Users'],
      summary: 'User GET /:id'
    },
    handler: UserController.getById
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: {
      tags: ['Users'],
      summary: 'User POST /'
    },
    handler: UserController.create
  });

  fastify.route({
    method: 'PATCH',
    url: '/:id',
    schema: {
      tags: ['Users'],
      summary: 'User PATCH /:id'
    },
    handler: UserController.update
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: {
      tags: ['Users'],
      summary: 'User DELETE /:id'
    },
    handler: UserController.delete
  });
}
