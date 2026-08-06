import { FastifyRequest, FastifyReply } from 'fastify';
import { SearchAuditUseCase } from '../../application/use-cases/search-audit.use-case';
import { GetAuditTimelineUseCase } from '../../application/use-cases/get-audit-timeline.use-case';

export class AuditController {
  constructor(
    private readonly searchUseCase: SearchAuditUseCase,
    private readonly timelineUseCase: GetAuditTimelineUseCase,
  ) {}

  async search(
    request: FastifyRequest<{ Querystring: Record<string, string> }>,
    reply: FastifyReply,
  ) {
    const filters: Parameters<typeof this.searchUseCase.execute>[0] = { ...request.query };
    if (request.query.startTime) filters.startTime = new Date(request.query.startTime);
    if (request.query.endTime) filters.endTime = new Date(request.query.endTime);

    try {
      const results = await this.searchUseCase.execute(filters);
      return reply.send({ data: results });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }

  async timeline(request: FastifyRequest<{ Params: { targetId: string } }>, reply: FastifyReply) {
    const { targetId } = request.params;

    try {
      const results = await this.timelineUseCase.execute(targetId);
      return reply.send({ data: results });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
