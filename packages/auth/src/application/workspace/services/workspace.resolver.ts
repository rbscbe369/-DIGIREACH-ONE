import { BusinessContext } from '../../../domain/context/entities/business-context.entity';
import { IWorkspaceTemplateRepository } from '../interfaces/i-workspace-template.repository';
import { WorkspaceProfile } from '../../../domain/workspace/entities/workspace-profile.entity';

export class WorkspaceResolver {
  constructor(private readonly templateRepo: IWorkspaceTemplateRepository) {}

  async resolve(context: BusinessContext): Promise<WorkspaceProfile> {
    const template = await this.templateRepo.getTemplateByIndustry(context.industryEdition);
    if (!template)
      throw new Error(`No workspace template found for industry ${context.industryEdition}`);
    return template;
  }
}
