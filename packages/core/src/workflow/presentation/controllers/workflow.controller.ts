import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { StartWorkflowUseCase } from '../../application/use-cases/workflow.use-cases';
import { StartWorkflowDto } from '../dtos/workflow.dto';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { WorkflowContext } from '../../domain/value-objects/workflow-context.vo';

export class WorkflowController {
  constructor(private readonly startUseCase: StartWorkflowUseCase) {}

  async startWorkflow(
    request: FastifyRequest<{ Body: z.infer<typeof StartWorkflowDto> }>,
    reply: FastifyReply,
  ) {
    const { definitionId, versionId } = request.body;

    // Simulate context extraction
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
    const wfContext = new WorkflowContext(execContext, {}, new Map(), 'corr-1', 'trace-1');

    try {
      const instance = await this.startUseCase.execute(definitionId, versionId, wfContext);
      return reply.code(201).send(instance);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
