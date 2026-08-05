import Fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { configureOpenApi } from './openapi/swagger.config';
import { globalErrorHandler } from './errors/error-handler';
import { userRoutes } from './routes/user.routes';
import { organizationRoutes } from './routes/organization.routes';
import { workspaceRoutes } from './routes/workspace.routes';
import { sessionRoutes } from './routes/session.routes';
import { roleRoutes } from './routes/role.routes';
import { permissionRoutes } from './routes/permission.routes';

export async function buildApp() {
  const app = Fastify({
    logger: true
  });

  // Zod compilers
  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  // Global Error Handler
  app.setErrorHandler(globalErrorHandler);

  // Trace ID Middleware (Placeholder)
  app.addHook('onRequest', async (request) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (request as any).traceId = request.headers['x-trace-id'] || 'trace-id-placeholder';
  });

  // OpenAPI Setup
  await configureOpenApi(app);

  // Register Routes
  app.register(async (api) => {
    await api.register(userRoutes, { prefix: '/users' });
    await api.register(organizationRoutes, { prefix: '/organizations' });
    await api.register(workspaceRoutes, { prefix: '/workspaces' });
    await api.register(sessionRoutes, { prefix: '/sessions' });
    await api.register(roleRoutes, { prefix: '/roles' });
    await api.register(permissionRoutes, { prefix: '/permissions' });
  }, { prefix: '/api/v1/identity' });

  return app;
}
