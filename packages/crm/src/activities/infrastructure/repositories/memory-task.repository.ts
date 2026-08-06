import { ITaskRepository } from '../../application/interfaces/i-task.repository';
import { Task } from '../../domain/entities/task.entity';

export class MemoryTaskRepository implements ITaskRepository {
  private tasks = new Map<string, Task>();

  async findById(id: string): Promise<Task | null> {
    return this.tasks.get(id) || null;
  }

  async save(task: Task): Promise<void> {
    this.tasks.set(task.taskId, task);
  }
}
