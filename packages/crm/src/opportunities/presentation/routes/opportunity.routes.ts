import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { OpportunityController } from '../controllers/opportunity.controller';
import {
  CreateOpportunityUseCase,
  ArchiveOpportunityUseCase,
} from '../../application/use-cases/opportunity.use-cases';
import { OpportunityService } from '../../application/services/opportunity.service';
import { MemoryOpportunityRepository } from '../../infrastructure/repositories/memory-opportunity.repository';
import { CreateOpportunityDto } from '../dtos/opportunity.dto';

export async function opportunityRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryOpportunityRepository();
  const service = new OpportunityService(repo);
  const createUseCase = new CreateOpportunityUseCase(service);
  const archiveUseCase = new ArchiveOpportunityUseCase(service);
  const controller = new OpportunityController(createUseCase, archiveUseCase);

  fastify.post('/opportunities', {
    schema: {
      tags: ['Opportunities'],
      summary: 'Create a new opportunity',
      body: CreateOpportunityDto,
      response: { 201: z.any() },
    },
    handler: controller.createOpportunity.bind(controller),
  });

  fastify.post('/opportunities/:id/archive', {
    schema: {
      tags: ['Opportunities'],
      summary: 'Archive an opportunity',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.archiveOpportunity.bind(controller),
  });
}
