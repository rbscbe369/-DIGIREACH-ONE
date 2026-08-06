import { WorkspaceManifest } from './workspace-manifest.entity';
import { WorkspaceBranding } from '../value-objects/workspace-branding.vo';
import { WorkspacePreferences } from '../value-objects/workspace-preferences.vo';
import { WorkspaceAIContext } from '../value-objects/workspace-ai.vo';
import { WorkspaceBreakpointProfile } from '../value-objects/workspace-breakpoint.vo';
import {
  WorkspaceSearchProvider,
  WorkspaceNotificationCenter,
} from '../value-objects/workspace-placeholders.vo';

export class WorkspaceProfile {
  constructor(
    public readonly profileId: string,
    public readonly manifest: WorkspaceManifest,
    public readonly branding: WorkspaceBranding,
    public readonly preferences: WorkspacePreferences,
    public readonly aiContext: WorkspaceAIContext,
    public readonly breakpoints: WorkspaceBreakpointProfile[],
    public readonly searchProvider: WorkspaceSearchProvider,
    public readonly notificationCenter: WorkspaceNotificationCenter,
  ) {}
}
