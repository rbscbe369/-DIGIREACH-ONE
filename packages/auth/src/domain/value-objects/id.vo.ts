export abstract class IdValueObject {
  constructor(public readonly value: string) {
    if (!value || value.trim() === '') {
      throw new Error('ID cannot be empty');
    }
  }
  equals(other: IdValueObject): boolean {
    return other !== null && other !== undefined && other.value === this.value;
  }
}

export class OrganizationId extends IdValueObject {}
export class HierarchyNodeId extends IdValueObject {}
export class WorkspaceId extends IdValueObject {}
export class UserId extends IdValueObject {}
export class PersonaId extends IdValueObject {}
export class RoleId extends IdValueObject {}
export class PermissionId extends IdValueObject {}
export class DeviceId extends IdValueObject {}
export class SessionId extends IdValueObject {}
export class AuditLogId extends IdValueObject {}
