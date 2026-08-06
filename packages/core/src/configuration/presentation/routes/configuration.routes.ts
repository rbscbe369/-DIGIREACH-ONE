import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { ConfigurationController } from '../controllers/configuration.controller';
import { ResolveConfigParamsDto, ResolveConfigResponseDto } from '../dtos/configuration.dto';
import { ConfigurationService } from '../../application/services/configuration.service';
import { ConfigurationResolver } from '../../application/services/configuration.resolver';
import { MemoryConfigurationRepository } from '../../infrastructure/repositories/memory-configuration.repository';
import { IExecutionContextProvider } from '../../application/interfaces/i-execution-context.provider';
import { ExecutionContext } from '../../domain/value-objects/execution-context.vo';

// Placeholder context provider for DI setup
class DummyContextProvider implements IExecutionContextProvider {
  async get(): Promise<ExecutionContext> {
    return new ExecutionContext('platform-root');
  }
}

export async function configurationRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryConfigurationRepository();
  const resolver = new ConfigurationResolver(repo);
  const contextProvider = new DummyContextProvider();
  const service = new ConfigurationService(resolver, contextProvider);
  const controller = new ConfigurationController(service);

  fastify.get('/configs/:key', {
    schema: {
      tags: ['Configuration'],
      summary: 'Resolve effective configuration',
      params: ResolveConfigParamsDto,
      response: {
        200: ResolveConfigResponseDto,
      },
    },
    handler: controller.resolveConfiguration.bind(controller),
  });
}
