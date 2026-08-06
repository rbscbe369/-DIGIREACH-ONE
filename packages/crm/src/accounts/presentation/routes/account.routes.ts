import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { AccountController } from '../controllers/account.controller';
import {
  CreateAccountUseCase,
  ArchiveAccountUseCase,
} from '../../application/use-cases/account.use-cases';
import { AccountService } from '../../application/services/account.service';
import { MemoryAccountRepository } from '../../infrastructure/repositories/memory-account.repository';
import { CreateAccountDto } from '../dtos/account.dto';

export async function accountRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryAccountRepository();
  const service = new AccountService(repo);
  const createUseCase = new CreateAccountUseCase(service);
  const archiveUseCase = new ArchiveAccountUseCase(service);
  const controller = new AccountController(createUseCase, archiveUseCase);

  fastify.post('/accounts', {
    schema: {
      tags: ['Accounts'],
      summary: 'Create a new account',
      body: CreateAccountDto,
      response: { 201: z.any() },
    },
    handler: controller.createAccount.bind(controller),
  });

  fastify.post('/accounts/:id/archive', {
    schema: {
      tags: ['Accounts'],
      summary: 'Archive an account',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.archiveAccount.bind(controller),
  });
}
