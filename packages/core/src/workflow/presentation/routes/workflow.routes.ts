import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { WorkflowController } from '../controllers/workflow.controller';
import { StartWorkflowDto } from '../dtos/workflow.dto';
import { StartWorkflowUseCase } from '../../application/use-cases/workflow.use-cases';
import { MemoryWorkflowRepository } from '../../infrastructure/repositories/memory-workflow.repository';
import { MemoryWorkflowDefinitionRepository } from '../../infrastructure/repositories/memory-workflow-definition.repository';
import { DummyWorkflowEventPublisher } from '../../infrastructure/providers/dummy-workflow-event.publisher';

export async function workflowRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const instanceRepo = new MemoryWorkflowRepository();
  const definitionRepo = new MemoryWorkflowDefinitionRepository();
  const eventPublisher = new DummyWorkflowEventPublisher();

  const startUseCase = new StartWorkflowUseCase(instanceRepo, definitionRepo, eventPublisher);
  const controller = new WorkflowController(startUseCase);

  fastify.post('/workflows/start', {
    schema: {
      tags: ['Workflow'],
      summary: 'Start a new workflow instance',
      body: StartWorkflowDto,
      response: {
        201: z.any(),
      },
    },
    handler: controller.startWorkflow.bind(controller),
  });
}
