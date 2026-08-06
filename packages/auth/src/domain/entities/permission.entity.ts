import { Entity } from './entity';
import { PermissionId } from '../value-objects/id.vo';

export class Permission extends Entity<PermissionId> {
  constructor(
    id: PermissionId,
    public readonly claim: string,
    public readonly description: string,
  ) {
    super(id);
  }
}
