import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { PermissionController } from '../controllers/permission.controller';

export async function permissionRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Permissions'],
      summary: 'Permission GET /'
    },
    handler: PermissionController.list
  });
}
