import { WorkspaceModule } from '../value-objects/workspace-module.vo';
import { WorkspaceWidgetDefinition } from '../value-objects/workspace-widget.vo';
import { WorkspaceNavigation } from '../value-objects/workspace-navigation.vo';
import { WorkspaceExtension } from '../value-objects/workspace-placeholders.vo';

export class WorkspaceManifest {
  constructor(
    public readonly version: string,
    public readonly modules: WorkspaceModule[],
    public readonly widgets: WorkspaceWidgetDefinition[],
    public readonly navigation: WorkspaceNavigation,
    public readonly policies: Record<string, unknown>,
    public readonly extensions: WorkspaceExtension[],
  ) {}
}
