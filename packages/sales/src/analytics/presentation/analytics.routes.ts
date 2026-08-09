import { FastifyInstance } from 'fastify';
import { AnalyticsController } from './AnalyticsController';

export async function analyticsRoutes(fastify: FastifyInstance, controller: AnalyticsController) {
  fastify.get('/analytics/kpis', async (req, reply) => {
    return controller.getKpis(req, reply);
  });
}
