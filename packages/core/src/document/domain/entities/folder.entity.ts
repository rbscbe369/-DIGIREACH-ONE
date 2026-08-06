import { AccessPolicy } from '../value-objects/access-policy.vo';

export class Folder {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly parentId: string | null,
    public readonly metadata: Record<string, string>,
    public readonly accessPolicy: AccessPolicy,
    public readonly ownerId: string,
  ) {}
}
