import { BusinessContext } from '../../../domain/context/entities/business-context.entity';
import { AIContext } from '../../../domain/context/value-objects/ai-context.vo';

export class BusinessContextResolver {
  async resolveDefaultContext(userId: string): Promise<BusinessContext> {
    // Placeholder rules engine logic for default context
    return new BusinessContext(
      'ctx-' + Date.now(),
      userId,
      'org-default',
      'workspace-default',
      'role-default',
      'node-root',
      'enterprise',
      'en-US',
      'USD',
      'YYYY-MM-DD',
      'UTC',
      1,
      new AIContext(),
    );
  }
}
