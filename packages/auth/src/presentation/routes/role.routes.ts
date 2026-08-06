import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { RoleController } from '../controllers/role.controller';

export async function roleRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Roles'],
      summary: 'Role GET /',
    },
    handler: RoleController.list,
  });
}
