import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateContractSchema } from './contract.validators';
import { ContractService } from '../application/services/ContractService';
import { ContractTerm } from '../domain/value-objects/ContractTerm.vo';
import { RenewalPolicy, RenewalType } from '../domain/value-objects/RenewalPolicy.vo';

export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  async createContract(req: FastifyRequest, reply: FastifyReply) {
    const data = CreateContractSchema.parse(req.body);

    const term = new ContractTerm(
      new Date(data.startDate),
      data.endDate ? new Date(data.endDate) : null,
      data.noticePeriodDays,
    );

    const renewalPolicy = new RenewalPolicy(
      data.renewalType as RenewalType,
      data.renewalTermMonths,
    );

    const contract = await this.contractService.createContract(
      data.tenantId,
      data.organizationId,
      term,
      renewalPolicy,
      data.slas,
      data.originatingOrderId,
      data.originatingQuoteId,
    );

    return reply
      .status(201)
      .send({ contractId: contract.contractId, contractNumber: contract.contractNumber });
  }
}
