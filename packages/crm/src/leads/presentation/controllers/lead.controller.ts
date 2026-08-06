import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CreateLeadUseCase, ConvertLeadUseCase } from '../../application/use-cases/lead.use-cases';
import { CreateLeadDto } from '../dtos/lead.dto';

export class LeadController {
  constructor(
    private readonly createUseCase: CreateLeadUseCase,
    private readonly convertUseCase: ConvertLeadUseCase,
  ) {}

  async createLead(
    request: FastifyRequest<{ Body: z.infer<typeof CreateLeadDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Lead Created' });
  }

  async convertLead(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.convertUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Lead Converted' });
  }
}
