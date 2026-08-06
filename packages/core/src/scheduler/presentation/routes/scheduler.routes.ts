import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { SchedulerController } from '../controllers/scheduler.controller';
import { CreateScheduleDto } from '../dtos/scheduler.dto';
import { CreateScheduleUseCase } from '../../application/use-cases/scheduler.use-cases';
import { MemoryScheduleRepository } from '../../infrastructure/repositories/memory-schedule.repository';
import { DummySchedulerProvider } from '../../infrastructure/providers/dummy-scheduler.provider';
import { DummyScheduleEventPublisher } from '../../infrastructure/providers/dummy-schedule-event.publisher';

export async function schedulerRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryScheduleRepository();
  const provider = new DummySchedulerProvider();
  const publisher = new DummyScheduleEventPublisher();

  const useCase = new CreateScheduleUseCase(provider, repo, publisher);
  const controller = new SchedulerController(useCase);

  fastify.post('/schedules', {
    schema: {
      tags: ['Scheduler'],
      summary: 'Create a new schedule registration',
      body: CreateScheduleDto,
      response: {
        201: z.any(),
      },
    },
    handler: controller.createSchedule.bind(controller),
  });
}
