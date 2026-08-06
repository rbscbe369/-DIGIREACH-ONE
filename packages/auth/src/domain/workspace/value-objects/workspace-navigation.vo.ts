export interface NavigationNode {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  moduleRef?: string;
  children?: NavigationNode[];
}

export class WorkspaceNavigation {
  constructor(
    public readonly mainTree: NavigationNode[],
    public readonly quickActions: NavigationNode[],
    public readonly favorites: NavigationNode[],
  ) {}
}
