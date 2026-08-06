import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { AIController } from '../controllers/ai.controller';
import { ExecuteAITaskDto } from '../dtos/ai.dto';
import { ExecuteAITaskUseCase } from '../../application/use-cases/ai.use-cases';
import { AIOrchestrator } from '../../application/services/ai.orchestrator';
import { MemoryPromptRepository } from '../../infrastructure/repositories/memory-prompt.repository';
import { MemoryExecutionRepository } from '../../infrastructure/repositories/memory-execution.repository';
import { DummyAIProvider } from '../../infrastructure/providers/dummy-ai.provider';
import { ProviderResolver } from '../../application/services/provider.resolver';
import { CostEvaluator } from '../../application/services/cost.evaluator';

export async function aiRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const promptRepo = new MemoryPromptRepository();
  const execRepo = new MemoryExecutionRepository();
  const costEval = new CostEvaluator();

  // Scaffold registry mock
  const providerResolver = new ProviderResolver({
    registerProvider: () => {},
    getProvider: () => new DummyAIProvider(),
    getProviderInfo: () => null,
  });

  const useCase = new ExecuteAITaskUseCase(promptRepo, execRepo, providerResolver, costEval);
  const orchestrator = new AIOrchestrator(useCase);
  const controller = new AIController(orchestrator);

  fastify.post('/ai/execute', {
    schema: {
      tags: ['AI'],
      summary: 'Execute an AI Task',
      body: ExecuteAITaskDto,
      response: {
        200: z.any(),
      },
    },
    handler: controller.executeTask.bind(controller),
  });
}
