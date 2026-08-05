import { FastifyRequest, FastifyReply } from 'fastify';
import { ResponseHelper } from '../responses/api-response';

export class WorkspaceController {
  static async getById(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    
    // Call Application Use Case here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = { id: (request.params as any).id };
    
    return reply.send(ResponseHelper.success(data, traceId));
  }

  static async create(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    
    // Call Application Use Case here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = { id: 'new-id', ...request.body as any };
    
    return reply.status(201).send(ResponseHelper.success(data, traceId));
  }

  static async update(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    
    // Call Application Use Case here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = { id: (request.params as any).id, updated: true };
    
    return reply.send(ResponseHelper.success(data, traceId));
  }

  static async delete(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    
    // Call Application Use Case here
    
    return reply.send(ResponseHelper.success({ deleted: true }, traceId));
  }
  
  static async list(request: FastifyRequest, reply: FastifyReply) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const traceId = (request as any).traceId || '';
    
    // Call Application Use Case here
    
    return reply.send(ResponseHelper.success([], traceId));
  }
}
