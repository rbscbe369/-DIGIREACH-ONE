import { ExecuteAITaskUseCase } from '../use-cases/ai.use-cases';
import { AITask } from '../../domain/entities/ai-task.entity';
import { AIContext } from '../../domain/value-objects/ai-context.vo';
import { AIResult } from '../../domain/value-objects/ai-result.vo';

export class AIOrchestrator {
  constructor(private readonly executeAITaskUseCase: ExecuteAITaskUseCase) {}

  async executeTask(
    task: AITask,
    variables: Record<string, unknown>,
    context: AIContext,
  ): Promise<AIResult> {
    return this.executeAITaskUseCase.execute(task, variables, context);
  }
}
