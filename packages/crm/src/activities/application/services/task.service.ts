import { ITaskRepository } from '../interfaces/i-task.repository';
import { Task } from '../../domain/entities/task.entity';

export class TaskService {
  constructor(private readonly repo: ITaskRepository) {}

  async getTask(id: string): Promise<Task | null> {
    return this.repo.findById(id);
  }

  async saveTask(task: Task): Promise<void> {
    await this.repo.save(task);
  }
}
