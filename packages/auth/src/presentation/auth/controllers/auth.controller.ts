import { FastifyRequest, FastifyReply } from 'fastify';
import { ResponseHelper } from '../../responses/api-response';

export class AuthController {
  static async login(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';

    // Delegate to Application Layer (AuthenticationEngine)
    // const engine = request.server.diContainer.resolve('AuthenticationEngine');
    // const result = await engine.authenticate(body.provider, body);

    const data = {
      accessToken: 'access-token-placeholder',
      refreshToken: 'refresh-token-placeholder',
      user: { id: 'user-id' },
    };

    return reply.send(ResponseHelper.success(data, traceId));
  }

  static async logout(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    return reply.send(ResponseHelper.success({ loggedOut: true }, traceId));
  }

  static async refresh(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    return reply.send(ResponseHelper.success({ accessToken: 'new-access' }, traceId));
  }
}
