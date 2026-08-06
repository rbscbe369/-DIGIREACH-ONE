import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CreatePipelineUseCase } from '../../application/use-cases/pipeline.use-cases';
import { CreatePipelineDto } from '../dtos/pipeline.dto';

export class PipelineController {
  constructor(private readonly createUseCase: CreatePipelineUseCase) {}

  async createPipeline(
    request: FastifyRequest<{ Body: z.infer<typeof CreatePipelineDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Pipeline Created' });
  }
}
