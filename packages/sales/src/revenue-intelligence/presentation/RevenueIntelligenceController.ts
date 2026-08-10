import { FastifyRequest, FastifyReply } from 'fastify';
import { RevenueIntelligenceQueryService } from '../application/RevenueIntelligenceQueryService';

export class RevenueIntelligenceController {
  constructor(private readonly queryService: RevenueIntelligenceQueryService) {}

  public async getForecast(
    req: FastifyRequest<{
      Querystring: {
        tenantId: string;
        organizationId?: string;
        currency: string;
        periodType: string;
        date: string;
      };
    }>,
    reply: FastifyReply,
  ) {
    const { tenantId, organizationId, currency, periodType, date } = req.query;

    const snapshot = await this.queryService.getForecast(
      tenantId,
      organizationId || null,
      currency,
      periodType as import('../domain/ForecastPeriod.vo').ForecastPeriodType,
      new Date(date),
    );

    if (!snapshot) {
      return reply.code(404).send({ error: 'Forecast not found or no data available.' });
    }

    return reply.code(200).send({
      id: snapshot.id,
      weightedPipeline: snapshot.weightedPipeline,
      wonRevenue: snapshot.wonRevenue,
      lostRevenue: snapshot.lostRevenue,
      pipelineCount: snapshot.pipelineCount,
      wonCount: snapshot.wonCount,
      lostCount: snapshot.lostCount,
    });
  }

  public async getHistoricalCloseRate(
    req: FastifyRequest<{
      Querystring: { tenantId: string; organizationId?: string; currency: string };
    }>,
    reply: FastifyReply,
  ) {
    const { tenantId, organizationId, currency } = req.query;

    const rate = await this.queryService.getHistoricalCloseRate(
      tenantId,
      organizationId || null,
      currency,
    );

    return reply.code(200).send(rate);
  }
}
