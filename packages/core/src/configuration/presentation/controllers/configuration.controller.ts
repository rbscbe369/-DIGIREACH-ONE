import { FastifyRequest, FastifyReply } from 'fastify';
import { ConfigurationService } from '../../application/services/configuration.service';

export class ConfigurationController {
  constructor(private readonly service: ConfigurationService) {}

  async resolveConfiguration(
    request: FastifyRequest<{ Params: { key: string } }>,
    reply: FastifyReply,
  ) {
    const { key } = request.params;

    try {
      const value = await this.service.resolve(key);
      return reply.send({ key, value });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
