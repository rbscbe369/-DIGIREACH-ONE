import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ActivityController } from '../controllers/activity.controller';
import {
  CreateActivityUseCase,
  CompleteActivityUseCase,
} from '../../application/use-cases/activity.use-cases';
import { ActivityService } from '../../application/services/activity.service';
import { MemoryActivityRepository } from '../../infrastructure/repositories/memory-activity.repository';
import { CreateActivityDto } from '../dtos/activity.dto';

export async function activityRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryActivityRepository();
  const service = new ActivityService(repo);
  const createUseCase = new CreateActivityUseCase(service);
  const completeUseCase = new CompleteActivityUseCase(service);
  const controller = new ActivityController(createUseCase, completeUseCase);

  fastify.post('/activities', {
    schema: {
      tags: ['Activities'],
      summary: 'Create a new activity',
      body: CreateActivityDto,
      response: { 201: z.any() },
    },
    handler: controller.createActivity.bind(controller),
  });

  fastify.post('/activities/:id/complete', {
    schema: {
      tags: ['Activities'],
      summary: 'Complete an activity',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.completeActivity.bind(controller),
  });
}
