import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { DocumentService } from '../../application/services/document.service';
import { CreateDocumentDto } from '../dtos/document.dto';
import { Document } from '../../domain/entities/document.entity';
import { AccessPolicy } from '../../domain/value-objects/access-policy.vo';
import { RetentionPolicy } from '../../domain/value-objects/retention-policy.vo';
import { SearchMetadata } from '../../domain/value-objects/search-metadata.vo';
import { AIMetadata } from '../../domain/value-objects/ai-metadata.vo';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  async create(
    request: FastifyRequest<{ Body: z.infer<typeof CreateDocumentDto> }>,
    reply: FastifyReply,
  ) {
    const body = request.body;

    // Simulate context extraction
    const context = new ExecutionContext(
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
      [],
      body.ownerId,
    );

    const doc = new Document(
      body.id,
      body.folderId,
      body.classification,
      new AccessPolicy([], [], [body.ownerId]),
      new RetentionPolicy(null, null),
      new SearchMetadata('Untitled'),
      new AIMetadata(),
      [],
      [],
      body.ownerId,
      new Date(),
    );

    try {
      await this.documentService.create(doc, context);
      return reply.code(201).send({ id: doc.id });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
