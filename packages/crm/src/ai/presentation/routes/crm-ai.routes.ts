import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { CRMAiController } from '../controllers/crm-ai.controller';
import { ContinueConversationUseCase } from '../../application/use-cases/assistant.use-cases';
import { ConversationManager } from '../../application/services/conversation.manager';
import { MemoryConversationRepository } from '../../infrastructure/repositories/memory-conversation.repository';
import { ContinueConversationDto } from '../dtos/crm-ai.dto';

export async function crmAiRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryConversationRepository();
  const manager = new ConversationManager(repo);
  const useCase = new ContinueConversationUseCase(manager);
  const controller = new CRMAiController(useCase);

  fastify.post('/ai/conversations/:id/messages', {
    schema: {
      tags: ['CRMAssistant'],
      summary: 'Send a message to AI Assistant',
      params: z.object({ id: z.string() }),
      body: ContinueConversationDto,
      response: { 200: z.any() },
    },
    handler: controller.continueConversation.bind(controller),
  });
}
