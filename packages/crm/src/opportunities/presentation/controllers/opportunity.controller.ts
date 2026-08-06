import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import {
  CreateOpportunityUseCase,
  ArchiveOpportunityUseCase,
} from '../../application/use-cases/opportunity.use-cases';
import { CreateOpportunityDto } from '../dtos/opportunity.dto';

export class OpportunityController {
  constructor(
    private readonly createUseCase: CreateOpportunityUseCase,
    private readonly archiveUseCase: ArchiveOpportunityUseCase,
  ) {}

  async createOpportunity(
    request: FastifyRequest<{ Body: z.infer<typeof CreateOpportunityDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Opportunity Created' });
  }

  async archiveOpportunity(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await this.archiveUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Opportunity Archived' });
  }
}
