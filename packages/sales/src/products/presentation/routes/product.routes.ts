import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { ProductController } from '../controllers/product.controller';
import { GetProductUseCase } from '../../application/use-cases/product.use-cases';
import { ProductService } from '../../application/services/product.service';
import { MemoryProductRepository } from '../../infrastructure/repositories/memory-product.repository';

export async function productRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();
  const repo = new MemoryProductRepository();
  const service = new ProductService(repo);
  const useCase = new GetProductUseCase(service);
  const controller = new ProductController(useCase);

  fastify.get('/products/:id', {
    schema: {
      tags: ['Products'],
      summary: 'Get Product',
      params: z.object({ id: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.getProduct.bind(controller),
  });
}
