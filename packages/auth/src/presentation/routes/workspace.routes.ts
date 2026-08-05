import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { WorkspaceController } from '../controllers/workspace.controller';

export async function workspaceRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      tags: ['Workspaces'],
      summary: 'Workspace GET /'
    },
    handler: WorkspaceController.list
  });

  fastify.route({
    method: 'POST',
    url: '/switch',
    schema: {
      tags: ['Workspaces'],
      summary: 'Workspace POST /switch'
    },
    handler: WorkspaceController.create
  });
}
