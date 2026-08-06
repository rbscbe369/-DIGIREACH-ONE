import { Task } from '../../domain/entities/task.entity';

export interface ITaskRepository {
  findById(id: string): Promise<Task | null>;
  save(task: Task): Promise<void>;
}
