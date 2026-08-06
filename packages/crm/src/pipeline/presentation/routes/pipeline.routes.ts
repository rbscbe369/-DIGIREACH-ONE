import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { PipelineController } from '../controllers/pipeline.controller';
import { CreatePipelineUseCase } from '../../application/use-cases/pipeline.use-cases';
import { PipelineService } from '../../application/services/pipeline.service';
import { MemoryPipelineRepository } from '../../infrastructure/repositories/memory-pipeline.repository';
import { CreatePipelineDto } from '../dtos/pipeline.dto';

export async function pipelineRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryPipelineRepository();
  const service = new PipelineService(repo);
  const createUseCase = new CreatePipelineUseCase(service);
  const controller = new PipelineController(createUseCase);

  fastify.post('/pipelines', {
    schema: {
      tags: ['Pipelines'],
      summary: 'Create a new pipeline',
      body: CreatePipelineDto,
      response: { 201: z.any() },
    },
    handler: controller.createPipeline.bind(controller),
  });
}
