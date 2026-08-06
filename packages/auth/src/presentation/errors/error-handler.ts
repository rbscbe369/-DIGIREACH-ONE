import { FastifyRequest, FastifyReply, FastifyError } from 'fastify';
import { ResponseHelper } from '../responses/api-response';

export function globalErrorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const traceId = (request as any).traceId || '';

  if (error.validation) {
    return reply
      .status(400)
      .send(
        ResponseHelper.error('VALIDATION_ERROR', 'Invalid request data', error.validation, traceId),
      );
  }

  // Handle Domain Exceptions here (map to 400, 404, 409 etc)

  // Default to 500
  return reply
    .status(500)
    .send(
      ResponseHelper.error('INTERNAL_SERVER_ERROR', 'An unexpected error occurred', [], traceId),
    );
}
