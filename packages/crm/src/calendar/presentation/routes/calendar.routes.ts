import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { CalendarController } from '../controllers/calendar.controller';
import { CreateCalendarUseCase } from '../../application/use-cases/calendar.use-cases';
import { ScheduleMeetingUseCase } from '../../application/use-cases/meeting.use-cases';
import { CalendarService } from '../../application/services/calendar.service';
import { MeetingService } from '../../application/services/meeting.service';
import { MemoryCalendarRepository } from '../../infrastructure/repositories/memory-calendar.repository';
import { MemoryMeetingRepository } from '../../infrastructure/repositories/memory-meeting.repository';
import { CreateCalendarDto, ScheduleMeetingDto } from '../dtos/calendar.dto';

export async function calendarRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const calendarRepo = new MemoryCalendarRepository();
  const meetingRepo = new MemoryMeetingRepository();
  const calendarService = new CalendarService(calendarRepo);
  const meetingService = new MeetingService(meetingRepo);
  const createCalendarUseCase = new CreateCalendarUseCase(calendarService);
  const scheduleMeetingUseCase = new ScheduleMeetingUseCase(meetingService);
  const controller = new CalendarController(createCalendarUseCase, scheduleMeetingUseCase);

  fastify.post('/calendars', {
    schema: {
      tags: ['Calendar'],
      summary: 'Create a new calendar',
      body: CreateCalendarDto,
      response: { 201: z.any() },
    },
    handler: controller.createCalendar.bind(controller),
  });

  fastify.post('/meetings', {
    schema: {
      tags: ['Calendar'],
      summary: 'Schedule a meeting',
      body: ScheduleMeetingDto,
      response: { 201: z.any() },
    },
    handler: controller.scheduleMeeting.bind(controller),
  });
}
