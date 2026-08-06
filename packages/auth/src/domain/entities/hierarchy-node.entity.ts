import { Entity } from './entity';
import { HierarchyNodeId, OrganizationId } from '../value-objects/id.vo';

export class HierarchyNode extends Entity<HierarchyNodeId> {
  private _isActive: boolean;

  constructor(
    id: HierarchyNodeId,
    public readonly organizationId: OrganizationId,
    public readonly name: string,
    public readonly nodeType: string,
    public readonly parentNodeId: HierarchyNodeId | null,
    isActive: boolean = true,
  ) {
    super(id);
    this._isActive = isActive;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  public deactivate(): void {
    this._isActive = false;
  }
}
