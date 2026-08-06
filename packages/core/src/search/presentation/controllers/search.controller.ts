import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { SearchService } from '../../application/services/search.service';
import { ExecuteSearchDto } from '../dtos/search.dto';
import { ExecutionContext } from '../../../configuration/domain/value-objects/execution-context.vo';

export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  async executeSearch(
    request: FastifyRequest<{
      Params: { indexName: string };
      Body: z.infer<typeof ExecuteSearchDto>;
    }>,
    reply: FastifyReply,
  ) {
    const { indexName } = request.params;
    const body = request.body;

    // Simulate context extraction
    const context = new ExecutionContext(
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

    try {
      const result = await this.searchService.search(indexName, body.query, context, body.page);
      return reply.code(200).send(result);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
