import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { SearchController } from '../controllers/search.controller';
import { ExecuteSearchDto } from '../dtos/search.dto';
import { SearchService } from '../../application/services/search.service';
import {
  ExecuteSearchUseCase,
  IndexDocumentUseCase,
  GetSuggestionsUseCase,
} from '../../application/use-cases/search.use-cases';
import { MemorySearchAnalyticsRepository } from '../../infrastructure/repositories/memory-search-analytics.repository';
import { DummySearchProvider } from '../../infrastructure/providers/dummy-search.provider';
import { DummySuggestionProvider } from '../../infrastructure/providers/dummy-suggestion.provider';

export async function searchRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const searchProvider = new DummySearchProvider();
  const suggestionProvider = new DummySuggestionProvider();
  const analyticsRepo = new MemorySearchAnalyticsRepository();

  const executeUseCase = new ExecuteSearchUseCase(searchProvider, analyticsRepo);
  const indexUseCase = new IndexDocumentUseCase(searchProvider);
  const suggestUseCase = new GetSuggestionsUseCase(suggestionProvider);

  const service = new SearchService(executeUseCase, indexUseCase, suggestUseCase);
  const controller = new SearchController(service);

  fastify.post('/search/:indexName/execute', {
    schema: {
      tags: ['Search'],
      summary: 'Execute a search query on a logical index',
      body: ExecuteSearchDto,
      params: z.object({ indexName: z.string() }),
    },
    handler: controller.executeSearch.bind(controller),
  });
}
