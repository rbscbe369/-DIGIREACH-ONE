import { WorkspaceProfile } from '../../../domain/workspace/entities/workspace-profile.entity';

export interface IWorkspaceTemplateRepository {
  getTemplateByIndustry(industryEdition: string): Promise<WorkspaceProfile | null>;
  getTemplateByRole(roleId: string): Promise<WorkspaceProfile | null>;
}
