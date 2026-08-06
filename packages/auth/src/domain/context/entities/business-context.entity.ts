import { AIContext } from '../value-objects/ai-context.vo';

export class BusinessContext {
  constructor(
    public readonly contextId: string,
    public readonly userId: string,
    public readonly organizationId: string,
    public readonly workspaceId: string,
    public readonly roleId: string,
    public readonly hierarchyNodeId: string,
    public readonly industryEdition: string,
    public readonly locale: string,
    public readonly currency: string,
    public readonly dateFormat: string,
    public readonly timeZone: string,
    public readonly contextVersion: number,
    public readonly aiContext: AIContext,
    public readonly resolvedAt: Date = new Date(),
  ) {}

  // Immutable snapshot builder methods if needed
}
