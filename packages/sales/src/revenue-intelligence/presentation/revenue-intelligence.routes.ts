import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { RevenueIntelligenceController } from './RevenueIntelligenceController';
import {
  ForecastQuerySchema,
  HistoricalCloseRateQuerySchema,
} from './revenue-intelligence.validators';

export async function revenueIntelligenceRoutes(
  fastify: FastifyInstance,
  controller: RevenueIntelligenceController,
) {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.get(
    '/api/v1/revenue-intelligence/forecast',
    {
      schema: {
        querystring: ForecastQuerySchema,
      },
    },
    controller.getForecast.bind(controller),
  );

  server.get(
    '/api/v1/revenue-intelligence/historical-close-rate',
    {
      schema: {
        querystring: HistoricalCloseRateQuerySchema,
      },
    },
    controller.getHistoricalCloseRate.bind(controller),
  );
}
