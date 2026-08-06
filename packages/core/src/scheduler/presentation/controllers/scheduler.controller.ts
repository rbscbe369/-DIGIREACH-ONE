import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CreateScheduleUseCase } from '../../application/use-cases/scheduler.use-cases';
import { CreateScheduleDto } from '../dtos/scheduler.dto';
import { ScheduleDefinition } from '../../domain/entities/schedule-definition.entity';
import { ScheduleType } from '../../domain/value-objects/schedule-type.vo';
import { ScheduleTrigger } from '../../domain/value-objects/schedule-trigger.vo';
import { RetryPolicy, RetryPolicyType } from '../../domain/value-objects/retry-policy-type.vo';

export class SchedulerController {
  constructor(private readonly createUseCase: CreateScheduleUseCase) {}

  async createSchedule(
    request: FastifyRequest<{ Body: z.infer<typeof CreateScheduleDto> }>,
    reply: FastifyReply,
  ) {
    const { name, type, payloadTemplate, startAt } = request.body;

    const trigger = new ScheduleTrigger(new Date(startAt));
    const retryPolicy = new RetryPolicy(RetryPolicyType.NONE);

    const definition = new ScheduleDefinition(
      Date.now().toString(),
      name,
      type as ScheduleType,
      payloadTemplate,
      trigger,
      retryPolicy,
      new Date(),
    );

    try {
      const registration = await this.createUseCase.execute(definition);
      return reply.code(201).send(registration);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
