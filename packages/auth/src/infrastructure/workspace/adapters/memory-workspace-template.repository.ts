import { IWorkspaceTemplateRepository } from '../../../application/workspace/interfaces/i-workspace-template.repository';
import { WorkspaceProfile } from '../../../domain/workspace/entities/workspace-profile.entity';
import { WorkspaceManifest } from '../../../domain/workspace/entities/workspace-manifest.entity';
import { WorkspaceBranding } from '../../../domain/workspace/value-objects/workspace-branding.vo';
import { WorkspacePreferences } from '../../../domain/workspace/value-objects/workspace-preferences.vo';
import { WorkspaceAIContext } from '../../../domain/workspace/value-objects/workspace-ai.vo';
import { WorkspaceBreakpointProfile } from '../../../domain/workspace/value-objects/workspace-breakpoint.vo';
import {
  WorkspaceSearchProvider,
  WorkspaceNotificationCenter,
} from '../../../domain/workspace/value-objects/workspace-placeholders.vo';
import { WorkspaceNavigation } from '../../../domain/workspace/value-objects/workspace-navigation.vo';

export class MemoryWorkspaceTemplateRepository implements IWorkspaceTemplateRepository {
  async getTemplateByIndustry(_industryEdition: string): Promise<WorkspaceProfile | null> {
    return new WorkspaceProfile(
      'profile-default',
      new WorkspaceManifest('1.0.0', [], [], new WorkspaceNavigation([], [], []), {}, []),
      new WorkspaceBranding('#000000', '#FFFFFF', 'logo.png', 'favicon.ico', 'Inter'),
      new WorkspacePreferences('system', 'comfortable', 'normal', 'ltr'),
      new WorkspaceAIContext([], [], [], 'default-assistant', {}),
      [new WorkspaceBreakpointProfile('desktop', 1024, null, 12, 24)],
      new WorkspaceSearchProvider('default-search'),
      new WorkspaceNotificationCenter('default-notifications'),
    );
  }

  async getTemplateByRole(_roleId: string): Promise<WorkspaceProfile | null> {
    return this.getTemplateByIndustry('default');
  }
}
