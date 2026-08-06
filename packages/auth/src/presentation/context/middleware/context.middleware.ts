import { FastifyRequest, FastifyReply } from 'fastify';
import { ExecutionContext } from '../../../domain/context/entities/execution-context.entity';
import { BusinessContext } from '../../../domain/context/entities/business-context.entity';
import { AIContext } from '../../../domain/context/value-objects/ai-context.vo';

export async function ContextMiddleware(request: FastifyRequest, _reply: FastifyReply) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const traceId = (request as any).traceId || 'trace-id-fallback';
  const requestId = request.id;

  // This is a placeholder for where ResolveContextUseCase would be invoked
  // via DI to resolve the BusinessContext from the parsed JWT.

  const dummyContext = new BusinessContext(
    'ctx-123',
    'usr-123',
    'org-123',
    'ws-123',
    'role-123',
    'node-123',
    'enterprise',
    'en-US',
    'USD',
    'YYYY-MM-DD',
    'UTC',
    1,
    new AIContext(),
  );

  const executionContext = new ExecutionContext(traceId, requestId, dummyContext);

  // Decorating request with execution context for downstream capability access
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request as any).executionContext = executionContext;

  // Also extracting critical metadata for immediate logging scope
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request as any).contextId = dummyContext.contextId;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request as any).organizationId = dummyContext.organizationId;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request as any).workspaceId = dummyContext.workspaceId;
}
