import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CreateCalendarUseCase } from '../../application/use-cases/calendar.use-cases';
import { ScheduleMeetingUseCase } from '../../application/use-cases/meeting.use-cases';
import { CreateCalendarDto, ScheduleMeetingDto } from '../dtos/calendar.dto';

export class CalendarController {
  constructor(
    private readonly createCalendarUseCase: CreateCalendarUseCase,
    private readonly scheduleMeetingUseCase: ScheduleMeetingUseCase,
  ) {}

  async createCalendar(
    request: FastifyRequest<{ Body: z.infer<typeof CreateCalendarDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Calendar Created' });
  }

  async scheduleMeeting(
    request: FastifyRequest<{ Body: z.infer<typeof ScheduleMeetingDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Meeting Scheduled' });
  }
}
