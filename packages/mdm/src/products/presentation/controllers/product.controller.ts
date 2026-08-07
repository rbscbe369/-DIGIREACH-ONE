import { FastifyRequest, FastifyReply } from 'fastify';
import { GetProductUseCase } from '../../application/use-cases/product.use-cases';
export class ProductController {
  constructor(private readonly useCase: GetProductUseCase) {}
  async getProduct(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    const result = await this.useCase.execute(request.params.id);
    return reply.code(200).send(result);
  }
}
