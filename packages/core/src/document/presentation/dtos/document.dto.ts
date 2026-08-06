import { z } from 'zod';
import { SecurityClassification } from '../../domain/value-objects/security-classification.vo';

export const CreateDocumentDto = z.object({
  id: z.string(),
  folderId: z.string().nullable(),
  classification: z.nativeEnum(SecurityClassification),
  ownerId: z.string(),
});

export const UploadVersionDto = z.object({
  fileName: z.string(),
  // raw bytes would come from fastify-multipart
});
