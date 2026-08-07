import { FastifyRequest, FastifyReply } from 'fastify';
export class MasterDataController {
  async checkHealth(_request: FastifyRequest, reply: FastifyReply) {
    return reply.code(200).send({ status: 'OK' });
  }
}
