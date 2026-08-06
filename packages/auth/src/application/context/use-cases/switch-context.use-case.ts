import { IBusinessContextProvider } from '../interfaces/i-business-context.provider';
import { BusinessContextResolver } from '../services/business-context.resolver';

export class SwitchContextUseCase {
  constructor(
    private readonly contextProvider: IBusinessContextProvider,
    private readonly resolver: BusinessContextResolver,
  ) {}

  async execute(userId: string, targetWorkspaceId: string) {
    const execContext = this.contextProvider.getExecutionContext();
    if (!execContext) throw new Error('No active execution context');

    // Generate new context based on new workspace (placeholder logic)
    const newContext = await this.resolver.resolveDefaultContext(userId);
    // Overriding workspace for the sake of the placeholder switch logic
    Object.assign(newContext, {
      workspaceId: targetWorkspaceId,
      contextVersion: newContext.contextVersion + 1,
    });

    execContext.switchContext(newContext);
    return newContext;
  }
}
