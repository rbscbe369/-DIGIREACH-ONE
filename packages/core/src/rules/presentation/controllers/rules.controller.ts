import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { RuleService } from '../../application/services/rules.service';
import { EvaluateRuleSetDto } from '../dtos/rules.dto';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';
import { RuleContext } from '../../domain/value-objects/rule-context.vo';

export class RuleController {
  constructor(private readonly ruleService: RuleService) {}

  async evaluateRuleSet(
    request: FastifyRequest<{ Body: z.infer<typeof EvaluateRuleSetDto> }>,
    reply: FastifyReply,
  ) {
    const { ruleSetId, versionId } = request.body;

    const execContext = new ExecutionContext(
      'platform',
      'org1',
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      ['role1'],
      'user1',
    );
    const ruleContext = new RuleContext(execContext, null, {}, new Map(), 'corr-1', 'trace-1');

    try {
      const result = await this.ruleService.evaluateRuleSet(ruleSetId, versionId, ruleContext);
      return reply.code(200).send(result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
