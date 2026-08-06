import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import {
  CreateAccountUseCase,
  ArchiveAccountUseCase,
} from '../../application/use-cases/account.use-cases';
import { CreateAccountDto } from '../dtos/account.dto';

export class AccountController {
  constructor(
    private readonly createUseCase: CreateAccountUseCase,
    private readonly archiveUseCase: ArchiveAccountUseCase,
  ) {}

  async createAccount(
    request: FastifyRequest<{ Body: z.infer<typeof CreateAccountDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Account Created' });
  }

  async archiveAccount(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.archiveUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Account Archived' });
  }
}
