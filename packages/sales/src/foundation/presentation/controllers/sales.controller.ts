import { FastifyRequest, FastifyReply } from 'fastify';
export class SalesController {
  async checkHealth(_request: FastifyRequest, reply: FastifyReply) {
    return reply.code(200).send({ status: 'OK' });
  }
}
