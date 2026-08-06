import { IReminderRepository } from '../interfaces/i-reminder.repository';
import { Reminder } from '../../domain/entities/reminder.entity';

export class ReminderService {
  constructor(private readonly repo: IReminderRepository) {}

  async saveReminder(reminder: Reminder): Promise<void> {
    await this.repo.save(reminder);
  }
}
