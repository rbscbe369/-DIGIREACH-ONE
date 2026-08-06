import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { WorkspaceController } from '../controllers/workspace.controller';
import { GetWorkspaceProfileParamsDto } from '../dtos/workspace.dto';
import { ResolveWorkspaceUseCase } from '../../../application/workspace/use-cases/resolve-workspace.use-case';
import { WorkspaceResolver } from '../../../application/workspace/services/workspace.resolver';
import { WorkspaceAssembler } from '../../../application/workspace/services/workspace.assembler';
import { MemoryWorkspaceTemplateRepository } from '../../../infrastructure/workspace/adapters/memory-workspace-template.repository';

export async function workspaceRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  // Primitive manual DI wiring for route registration
  const repo = new MemoryWorkspaceTemplateRepository();
  const resolver = new WorkspaceResolver(repo);
  const assembler = new WorkspaceAssembler();
  const useCase = new ResolveWorkspaceUseCase(resolver, assembler);
  const controller = new WorkspaceController(useCase);

  fastify.get('/profile', {
    schema: {
      tags: ['Workspace'],
      summary: 'Get active workspace profile',
      querystring: GetWorkspaceProfileParamsDto,
    },
    handler: controller.getProfile.bind(controller),
  });
}
