import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import {
  CreateActivityUseCase,
  CompleteActivityUseCase,
} from '../../application/use-cases/activity.use-cases';
import { CreateActivityDto } from '../dtos/activity.dto';

export class ActivityController {
  constructor(
    private readonly createUseCase: CreateActivityUseCase,
    private readonly completeUseCase: CompleteActivityUseCase,
  ) {}

  async createActivity(
    request: FastifyRequest<{ Body: z.infer<typeof CreateActivityDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Activity Created' });
  }

  async completeActivity(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.completeUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Activity Completed' });
  }
}
