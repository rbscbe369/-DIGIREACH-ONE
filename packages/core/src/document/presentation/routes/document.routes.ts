import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { DocumentController } from '../controllers/document.controller';
import { CreateDocumentDto } from '../dtos/document.dto';
import { DocumentService } from '../../application/services/document.service';
import {
  CreateDocumentUseCase,
  UploadVersionUseCase,
  GetDocumentUseCase,
  DeleteDocumentUseCase,
} from '../../application/use-cases/document.use-cases';
import { MemoryDocumentRepository } from '../../infrastructure/repositories/memory-document.repository';
import { DummyStorageProvider } from '../../infrastructure/providers/dummy-storage.provider';
import { AccessEvaluator } from '../../application/services/access.evaluator';

export async function documentRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryDocumentRepository();
  const storage = new DummyStorageProvider();
  const evaluator = new AccessEvaluator();

  const createUseCase = new CreateDocumentUseCase(repo, evaluator);
  const uploadUseCase = new UploadVersionUseCase(repo, storage, evaluator);
  const getUseCase = new GetDocumentUseCase(repo, evaluator);
  const deleteUseCase = new DeleteDocumentUseCase(repo, evaluator);

  const service = new DocumentService(createUseCase, uploadUseCase, getUseCase, deleteUseCase);
  const controller = new DocumentController(service);

  fastify.post('/documents', {
    schema: {
      tags: ['Document'],
      summary: 'Create a new document metadata entry',
      body: CreateDocumentDto,
    },
    handler: controller.create.bind(controller),
  });
}
