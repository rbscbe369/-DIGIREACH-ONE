import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import {
  CreateContactUseCase,
  ArchiveContactUseCase,
} from '../../application/use-cases/contact.use-cases';
import { CreateContactDto } from '../dtos/contact.dto';

export class ContactController {
  constructor(
    private readonly createUseCase: CreateContactUseCase,
    private readonly archiveUseCase: ArchiveContactUseCase,
  ) {}

  async createContact(
    request: FastifyRequest<{ Body: z.infer<typeof CreateContactDto> }>,
    reply: FastifyReply,
  ) {
    // Scaffold implementation
    return reply.code(201).send({ status: 'Contact Created' });
  }

  async archiveContact(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await this.archiveUseCase.execute(request.params.id);
    return reply.code(200).send({ status: 'Contact Archived' });
  }
}
