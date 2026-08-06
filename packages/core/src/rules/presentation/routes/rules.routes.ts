import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { RuleController } from '../controllers/rules.controller';
import { EvaluateRuleSetDto } from '../dtos/rules.dto';
import { EvaluateRuleSetUseCase } from '../../application/use-cases/rules.use-cases';
import { RuleService } from '../../application/services/rules.service';
import { MemoryRuleSetRepository } from '../../infrastructure/repositories/memory-rule-set.repository';
import { MemoryRuleHistoryRepository } from '../../infrastructure/repositories/memory-rule-history.repository';
import { DummyRuleEventPublisher } from '../../infrastructure/providers/dummy-rule-event.publisher';

export async function rulesRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const ruleSetRepo = new MemoryRuleSetRepository();
  const historyRepo = new MemoryRuleHistoryRepository();
  const eventPublisher = new DummyRuleEventPublisher();

  const evaluateUseCase = new EvaluateRuleSetUseCase(ruleSetRepo, historyRepo, eventPublisher);
  const service = new RuleService(evaluateUseCase);
  const controller = new RuleController(service);

  fastify.post('/rules/evaluate', {
    schema: {
      tags: ['Rules'],
      summary: 'Evaluate a ruleset',
      body: EvaluateRuleSetDto,
      response: {
        200: z.any(),
      },
    },
    handler: controller.evaluateRuleSet.bind(controller),
  });
}
