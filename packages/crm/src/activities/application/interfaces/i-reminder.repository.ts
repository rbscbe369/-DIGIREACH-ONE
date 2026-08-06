import { Reminder } from '../../domain/entities/reminder.entity';

export interface IReminderRepository {
  findById(id: string): Promise<Reminder | null>;
  save(reminder: Reminder): Promise<void>;
}
