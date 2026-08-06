import { BusinessContextService } from '../services/business-context.service';

export class ResolveContextUseCase {
  constructor(private readonly contextService: BusinessContextService) {}

  async execute(userId: string) {
    return this.contextService.resolveAndCache(userId);
  }
}
