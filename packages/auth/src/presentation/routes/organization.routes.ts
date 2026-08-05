import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { OrganizationController } from '../controllers/organization.controller';

export async function organizationRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: {
      tags: ['Organizations'],
      summary: 'Organization GET /:id'
    },
    handler: OrganizationController.getById
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: {
      tags: ['Organizations'],
      summary: 'Organization POST /'
    },
    handler: OrganizationController.create
  });
}
