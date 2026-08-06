import { IReminderRepository } from '../../application/interfaces/i-reminder.repository';
import { Reminder } from '../../domain/entities/reminder.entity';

export class MemoryReminderRepository implements IReminderRepository {
  private reminders = new Map<string, Reminder>();

  async findById(id: string): Promise<Reminder | null> {
    return this.reminders.get(id) || null;
  }

  async save(reminder: Reminder): Promise<void> {
    this.reminders.set(reminder.reminderId, reminder);
  }
}
