import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { CRMController } from '../controllers/crm.controller';
import { CRMKernel } from '../../application/services/crm.kernel';
import { CRMModuleRegistryService } from '../../application/services/crm-module-registry.service';
import { CRMConfigurationService } from '../../application/services/crm-configuration.service';
import { CRMService } from '../../application/services/crm.service';
import { CRMStatisticsService } from '../../application/services/crm-statistics.service';
import { MemoryCRMRepository } from '../../infrastructure/repositories/memory-crm.repository';
import { MemoryCRMConfigurationRepository } from '../../infrastructure/repositories/memory-crm-configuration.repository';
import { MemoryCRMStatisticsRepository } from '../../infrastructure/repositories/memory-crm-statistics.repository';
import {
  InitializeCRMUseCase,
  GetCRMConfigurationUseCase,
  UpdateCRMSettingsUseCase,
  GetCRMStatisticsUseCase,
} from '../../application/use-cases/crm.use-cases';
import { InitializeCRMDto, UpdateCRMConfigurationDto } from '../dtos/crm.dto';

export async function crmRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const crmRepo = new MemoryCRMRepository();
  const configRepo = new MemoryCRMConfigurationRepository();
  const statsRepo = new MemoryCRMStatisticsRepository();

  const registry = new CRMModuleRegistryService();
  const configService = new CRMConfigurationService(configRepo);
  const crmService = new CRMService(crmRepo);
  const statsService = new CRMStatisticsService(statsRepo);

  const kernel = CRMKernel.getInstance(registry, configService);

  const initializeUseCase = new InitializeCRMUseCase(crmService);
  const getConfigUseCase = new GetCRMConfigurationUseCase(configService);
  const updateConfigUseCase = new UpdateCRMSettingsUseCase(configService);
  const getStatsUseCase = new GetCRMStatisticsUseCase(statsService);

  const controller = new CRMController(
    kernel,
    initializeUseCase,
    getConfigUseCase,
    updateConfigUseCase,
    getStatsUseCase,
  );

  fastify.get('/crm/modules', {
    schema: {
      tags: ['CRM Foundation'],
      summary: 'Get all registered CRM modules',
      response: { 200: z.any() },
    },
    handler: controller.getModules.bind(controller),
  });

  fastify.post('/crm/initialize', {
    schema: {
      tags: ['CRM Foundation'],
      summary: 'Initialize CRM for a tenant',
      body: InitializeCRMDto,
      response: { 201: z.any() },
    },
    handler: controller.initialize.bind(controller),
  });

  fastify.get('/crm/configuration/:tenantId', {
    schema: {
      tags: ['CRM Foundation'],
      summary: 'Get CRM configuration',
      params: z.object({ tenantId: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.getConfiguration.bind(controller),
  });

  fastify.post('/crm/configuration', {
    schema: {
      tags: ['CRM Foundation'],
      summary: 'Update CRM configuration',
      body: UpdateCRMConfigurationDto,
      response: { 200: z.any() },
    },
    handler: controller.updateConfiguration.bind(controller),
  });

  fastify.get('/crm/statistics/:tenantId', {
    schema: {
      tags: ['CRM Foundation'],
      summary: 'Get CRM statistics',
      params: z.object({ tenantId: z.string() }),
      response: { 200: z.any() },
    },
    handler: controller.getStatistics.bind(controller),
  });
}
