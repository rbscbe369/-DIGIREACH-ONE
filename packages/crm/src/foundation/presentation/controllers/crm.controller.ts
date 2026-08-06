import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CRMKernel } from '../../application/services/crm.kernel';
import {
  InitializeCRMUseCase,
  GetCRMConfigurationUseCase,
  UpdateCRMSettingsUseCase,
  GetCRMStatisticsUseCase,
} from '../../application/use-cases/crm.use-cases';
import { InitializeCRMDto, UpdateCRMConfigurationDto } from '../dtos/crm.dto';
import { CRMValidators } from '../validators/crm.validators';

export class CRMController {
  constructor(
    private readonly kernel: CRMKernel,
    private readonly initializeUseCase: InitializeCRMUseCase,
    private readonly getConfigUseCase: GetCRMConfigurationUseCase,
    private readonly updateConfigUseCase: UpdateCRMSettingsUseCase,
    private readonly getStatsUseCase: GetCRMStatisticsUseCase,
  ) {}

  async getModules(_request: FastifyRequest, reply: FastifyReply) {
    const modules = this.kernel.registry.getAllModules();
    return reply.code(200).send({ modules });
  }

  async initialize(
    request: FastifyRequest<{ Body: z.infer<typeof InitializeCRMDto> }>,
    reply: FastifyReply,
  ) {
    const { tenantId } = request.body;
    await this.initializeUseCase.execute(tenantId);
    return reply.code(201).send({ status: 'CRM Initialized', tenantId });
  }

  async getConfiguration(
    request: FastifyRequest<{ Params: { tenantId: string } }>,
    reply: FastifyReply,
  ) {
    const config = await this.getConfigUseCase.execute(request.params.tenantId);
    return reply.code(200).send(config || {});
  }

  async updateConfiguration(
    request: FastifyRequest<{ Body: z.infer<typeof UpdateCRMConfigurationDto> }>,
    reply: FastifyReply,
  ) {
    const { tenantId, config: rawConfig } = request.body;
    const validatedConfig = CRMValidators.validateConfig(rawConfig);
    await this.updateConfigUseCase.execute(tenantId, validatedConfig);
    return reply.code(200).send({ status: 'Configuration Updated' });
  }

  async getStatistics(
    request: FastifyRequest<{ Params: { tenantId: string } }>,
    reply: FastifyReply,
  ) {
    const stats = await this.getStatsUseCase.execute(request.params.tenantId);
    return reply.code(200).send(stats);
  }
}
