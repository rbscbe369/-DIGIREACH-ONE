import { SearchAuditUseCase } from '../use-cases/search-audit.use-case';
import { GetAuditTimelineUseCase } from '../use-cases/get-audit-timeline.use-case';

export class AuditSearchService {
  constructor(
    public readonly searchUseCase: SearchAuditUseCase,
    public readonly timelineUseCase: GetAuditTimelineUseCase,
  ) {}
}
