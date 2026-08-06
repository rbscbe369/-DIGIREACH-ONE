import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { ContinueConversationUseCase } from '../../application/use-cases/assistant.use-cases';
import { ContinueConversationDto } from '../dtos/crm-ai.dto';
import { ConversationMessage } from '../../domain/value-objects/conversation-message.vo';

export class CRMAiController {
  constructor(private readonly continueConversationUseCase: ContinueConversationUseCase) {}

  async continueConversation(
    request: FastifyRequest<{
      Params: { id: string };
      Body: z.infer<typeof ContinueConversationDto>;
    }>,
    reply: FastifyReply,
  ) {
    const msg = new ConversationMessage('msg-1', 'USER', request.body.messageContent, new Date());
    await this.continueConversationUseCase.execute(request.params.id, msg);
    return reply.code(200).send({ status: 'Message processed' });
  }
}
