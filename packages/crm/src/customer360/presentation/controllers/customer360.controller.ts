import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import {
  BuildCustomer360UseCase,
  RefreshCustomer360UseCase,
} from '../../application/use-cases/customer360.use-cases';
import { BuildCustomer360Dto } from '../dtos/customer360.dto';

export class Customer360Controller {
  constructor(
    private readonly buildUseCase: BuildCustomer360UseCase,
    private readonly refreshUseCase: RefreshCustomer360UseCase,
  ) {}

  async buildCustomer(
    request: FastifyRequest<{ Body: z.infer<typeof BuildCustomer360Dto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Customer360 Built' });
  }

  async refreshCustomer(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.refreshUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Customer360 Refreshed' });
  }
}
