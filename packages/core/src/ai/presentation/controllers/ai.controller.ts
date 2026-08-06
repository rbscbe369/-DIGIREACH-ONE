import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { AIOrchestrator } from '../../application/services/ai.orchestrator';
import { ExecuteAITaskDto } from '../dtos/ai.dto';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { ContextAssembler } from '../../application/services/context.assembler';
import { AITask } from '../../domain/entities/ai-task.entity';
import { AIPolicy } from '../../domain/value-objects/ai-policy.vo';

export class AIController {
  constructor(private readonly orchestrator: AIOrchestrator) {}

  async executeTask(
    request: FastifyRequest<{ Body: z.infer<typeof ExecuteAITaskDto> }>,
    reply: FastifyReply,
  ) {
    const { taskId, variables } = request.body;

    const execContext = new ExecutionContext(
      'platform',
      'org1',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      ['role1'],
      'user1',
    );
    const aiContext = ContextAssembler.assemble(execContext, null, 'corr-1', 'trace-1');

    // Dummy Task load for scaffolding
    const policy = new AIPolicy(
      ['dummy-ai'],
      ['default-model'],
      1.0,
      4000,
      10000,
      'NONE',
      'INTERNAL',
      0.7,
    );
    const task = new AITask(taskId, 'Dummy Task', 'Description', 'tpl-1', policy);

    try {
      const result = await this.orchestrator.executeTask(task, variables, aiContext);
      return reply.code(200).send(result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
