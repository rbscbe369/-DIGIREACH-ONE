import { WorkspaceProfile } from '../../../domain/workspace/entities/workspace-profile.entity';
import { BusinessContext } from '../../../domain/context/entities/business-context.entity';

export class WorkspaceAssembler {
  assemble(baseProfile: WorkspaceProfile, _context: BusinessContext): WorkspaceProfile {
    // Merge baseProfile with contextual overrides (e.g. AIContext recommendations)
    return baseProfile;
  }
}
