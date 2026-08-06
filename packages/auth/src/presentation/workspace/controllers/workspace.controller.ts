import { FastifyRequest, FastifyReply } from 'fastify';
import { ResponseHelper } from '../../responses/api-response';
import { ResolveWorkspaceUseCase } from '../../../application/workspace/use-cases/resolve-workspace.use-case';

export class WorkspaceController {
  constructor(private readonly resolveWorkspaceUseCase: ResolveWorkspaceUseCase) {}

  async getProfile(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const executionContext = (request as any).executionContext;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';

    if (!executionContext) {
      return reply.code(401).send({ error: 'No execution context found' });
    }

    const profile = await this.resolveWorkspaceUseCase.execute(executionContext.activeContext);

    return reply.send(ResponseHelper.success(profile, traceId));
  }
}
