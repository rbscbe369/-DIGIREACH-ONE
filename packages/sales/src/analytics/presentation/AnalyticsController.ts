import { FastifyRequest, FastifyReply } from 'fastify';
import { AnalyticsQuerySchema } from './dtos/analytics.validators';
import { SalesAnalyticsQueryService } from '../application/services/SalesAnalyticsQueryService';
import { AnalyticsQueryContext } from '../domain/value-objects/AnalyticsQueryContext.vo';
import { SalesDimension } from '../domain/value-objects/SalesDimension.vo';
import { SalesPeriod, SalesPeriodType } from '../domain/value-objects/SalesPeriod.vo';

export class AnalyticsController {
  constructor(private readonly queryService: SalesAnalyticsQueryService) {}

  async getKpis(req: FastifyRequest, reply: FastifyReply) {
    const query = AnalyticsQuerySchema.parse(req.query);

    const dimension = new SalesDimension(
      query.tenantId,
      query.organizationId || null,
      null,
      null,
      query.currency,
    );
    const period = new SalesPeriod(
      query.periodType as SalesPeriodType,
      new Date(query.startDate),
      new Date(query.endDate),
    );

    const context = new AnalyticsQueryContext(dimension, period);
    const snapshot = await this.queryService.getKpis(context);

    if (!snapshot) {
      return reply.status(404).send({ error: 'No analytics found for the requested dimensions.' });
    }

    return reply.status(200).send({
      kpis: snapshot.kpis,
      dimension: snapshot.dimension,
      period: snapshot.period,
    });
  }
}
