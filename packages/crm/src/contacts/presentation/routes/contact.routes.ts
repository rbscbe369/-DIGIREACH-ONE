import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ContactController } from '../controllers/contact.controller';
import {
  CreateContactUseCase,
  ArchiveContactUseCase,
} from '../../application/use-cases/contact.use-cases';
import { ContactService } from '../../application/services/contact.service';
import { MemoryContactRepository } from '../../infrastructure/repositories/memory-contact.repository';
import { CreateContactDto } from '../dtos/contact.dto';

export async function contactRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryContactRepository();
  const service = new ContactService(repo);
  const createUseCase = new CreateContactUseCase(service);
  const archiveUseCase = new ArchiveContactUseCase(service);
  const controller = new ContactController(createUseCase, archiveUseCase);

  fastify.post('/contacts', {
    schema: {
      tags: ['Contacts'],
      summary: 'Create a new contact',
      body: CreateContactDto,
      response: { 201: z.any() },
    },
    handler: controller.createContact.bind(controller),
  });

  fastify.post('/contacts/:id/archive', {
    schema: {
      tags: ['Contacts'],
      summary: 'Archive a contact',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.archiveContact.bind(controller),
  });
}
