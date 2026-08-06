import { FastifyRequest, FastifyReply } from 'fastify';
import { MoveOrganizationNodeUseCase } from '../../../application/organization/use-cases/move-node.use-case';

export class OrganizationController {
  constructor(private readonly moveNodeUseCase: MoveOrganizationNodeUseCase) {}

  async moveNode(
    request: FastifyRequest<{ Params: { nodeId: string }; Body: { newParentId: string } }>,
    reply: FastifyReply,
  ) {
    const { nodeId } = request.params;
    const { newParentId } = request.body;

    try {
      const node = await this.moveNodeUseCase.execute(nodeId, newParentId);
      return reply.send({ data: node });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
