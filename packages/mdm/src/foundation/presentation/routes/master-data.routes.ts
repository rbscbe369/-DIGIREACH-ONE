import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { MasterDataController } from '../controllers/MasterDataController';

export async function masterDataRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();
  const controller = new MasterDataController();

  fastify.get('/mdm/health', {
    schema: {
      tags: ['MDM Foundation'],
      summary: 'Check Health',
      response: { 200: z.any() },
    },
    handler: controller.checkHealth.bind(controller),
  });
}
