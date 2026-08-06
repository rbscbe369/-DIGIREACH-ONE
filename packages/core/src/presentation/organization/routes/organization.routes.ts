import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { OrganizationController } from '../controllers/organization.controller';
import { MoveNodeDto, MoveNodeParamsDto } from '../dtos/organization.dto';
import { MoveOrganizationNodeUseCase } from '../../../application/organization/use-cases/move-node.use-case';
import { MemoryOrganizationRepository } from '../../../infrastructure/organization/repositories/memory-organization.repository';
import { HierarchyValidator } from '../../../domain/organization/policies/hierarchy-validator';

export async function organizationRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryOrganizationRepository();
  const validator = new HierarchyValidator();
  const useCase = new MoveOrganizationNodeUseCase(repo, validator);
  const controller = new OrganizationController(useCase);

  fastify.post('/nodes/:nodeId/move', {
    schema: {
      tags: ['Organization'],
      summary: 'Move an organization node',
      params: MoveNodeParamsDto,
      body: MoveNodeDto,
    },
    handler: controller.moveNode.bind(controller),
  });
}
