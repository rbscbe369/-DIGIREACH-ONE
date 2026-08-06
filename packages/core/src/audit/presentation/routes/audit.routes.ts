import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { AuditController } from '../controllers/audit.controller';
import { SearchAuditDto, TimelineParamsDto } from '../dtos/audit.dto';
import { SearchAuditUseCase } from '../../application/use-cases/search-audit.use-case';
import { GetAuditTimelineUseCase } from '../../application/use-cases/get-audit-timeline.use-case';
import { MemoryAuditRepository } from '../../infrastructure/repositories/memory-audit.repository';

export async function auditRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryAuditRepository();
  const searchUseCase = new SearchAuditUseCase(repo);
  const timelineUseCase = new GetAuditTimelineUseCase(repo);
  const controller = new AuditController(searchUseCase, timelineUseCase);

  fastify.get('/audits/search', {
    schema: {
      tags: ['Audit'],
      summary: 'Search audit logs',
      querystring: SearchAuditDto,
    },
    handler: controller.search.bind(controller),
  });

  fastify.get('/audits/timeline/:targetId', {
    schema: {
      tags: ['Audit'],
      summary: 'Get timeline for target',
      params: TimelineParamsDto,
    },
    handler: controller.timeline.bind(controller),
  });
}
