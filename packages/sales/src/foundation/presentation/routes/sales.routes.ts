import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { SalesController } from '../controllers/sales.controller';

export async function salesRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();
  const controller = new SalesController();

  fastify.get('/sales/health', {
    schema: {
      tags: ['Sales Foundation'],
      summary: 'Check Health',
      response: { 200: z.any() },
    },
    handler: controller.checkHealth.bind(controller),
  });
}
