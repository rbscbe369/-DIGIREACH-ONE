import { FastifyInstance } from 'fastify';
import { ContractController } from './ContractController';

export async function contractRoutes(fastify: FastifyInstance, controller: ContractController) {
  fastify.post('/contracts', async (req, reply) => {
    return controller.createContract(req, reply);
  });
}
