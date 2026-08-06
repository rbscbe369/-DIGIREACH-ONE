import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { Customer360Controller } from '../controllers/customer360.controller';
import {
  BuildCustomer360UseCase,
  RefreshCustomer360UseCase,
} from '../../application/use-cases/customer360.use-cases';
import { Customer360Service } from '../../application/services/customer360.service';
import { MemoryCustomer360Repository } from '../../infrastructure/repositories/memory-customer360.repository';
import { BuildCustomer360Dto } from '../dtos/customer360.dto';

export async function customer360Routes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryCustomer360Repository();
  const service = new Customer360Service(repo);
  const buildUseCase = new BuildCustomer360UseCase(service);
  const refreshUseCase = new RefreshCustomer360UseCase(service);
  const controller = new Customer360Controller(buildUseCase, refreshUseCase);

  fastify.post('/customer360', {
    schema: {
      tags: ['Customer360'],
      summary: 'Build Customer 360',
      body: BuildCustomer360Dto,
      response: { 201: z.any() },
    },
    handler: controller.buildCustomer.bind(controller),
  });

  fastify.post('/customer360/:id/refresh', {
    schema: {
      tags: ['Customer360'],
      summary: 'Refresh Customer 360',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.refreshCustomer.bind(controller),
  });
}
