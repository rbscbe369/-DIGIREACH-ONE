import { CreateCalendarDto, ScheduleMeetingDto } from '../dtos/calendar.dto';
export class CalendarValidators {
  static validateCreate(data: unknown) {
    return CreateCalendarDto.parse(data);
  }
  static validateSchedule(data: unknown) {
    return ScheduleMeetingDto.parse(data);
  }
}
