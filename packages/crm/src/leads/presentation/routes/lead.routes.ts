import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { LeadController } from '../controllers/lead.controller';
import { CreateLeadUseCase, ConvertLeadUseCase } from '../../application/use-cases/lead.use-cases';
import { LeadService } from '../../application/services/lead.service';
import { MemoryLeadRepository } from '../../infrastructure/repositories/memory-lead.repository';
import { CreateLeadDto } from '../dtos/lead.dto';

export async function leadRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const leadRepo = new MemoryLeadRepository();
  const leadService = new LeadService(leadRepo);
  const createUseCase = new CreateLeadUseCase(leadService);
  const convertUseCase = new ConvertLeadUseCase(leadService);
  const controller = new LeadController(createUseCase, convertUseCase);

  fastify.post('/leads', {
    schema: {
      tags: ['Leads'],
      summary: 'Create a new lead',
      body: CreateLeadDto,
      response: { 201: z.any() },
    },
    handler: controller.createLead.bind(controller),
  });

  fastify.post('/leads/:id/convert', {
    schema: {
      tags: ['Leads'],
      summary: 'Convert a lead',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.convertLead.bind(controller),
  });
}
