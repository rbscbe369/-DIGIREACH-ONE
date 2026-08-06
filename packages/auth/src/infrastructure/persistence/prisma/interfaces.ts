export interface ITransactionContext {
  [key: string]: unknown;
}

export interface IPrismaDelegate<T> {
  findUnique(args: {
    where: Record<string, unknown>;
    include?: Record<string, unknown>;
  }): Promise<T | null>;
  findFirst(args: {
    where: Record<string, unknown>;
    include?: Record<string, unknown>;
  }): Promise<T | null>;
  findMany(args?: {
    where?: Record<string, unknown>;
    take?: number;
    skip?: number;
    orderBy?: Record<string, unknown>;
    include?: Record<string, unknown>;
  }): Promise<T[]>;
  create(args: { data: T }): Promise<T>;
  updateMany(args: {
    where: Record<string, unknown>;
    data: Record<string, unknown>;
  }): Promise<void>;
  upsert(args: {
    where: Record<string, unknown>;
    update: Partial<T> | Record<string, unknown>;
    create: T | Record<string, unknown>;
  }): Promise<T>;
}

export interface IPrismaClient {
  $transaction<R>(fn: (prisma: ITransactionContext) => Promise<R>): Promise<R>;
  user: IPrismaDelegate<UserModel>;
  organization: IPrismaDelegate<OrganizationModel>;
  workspace: IPrismaDelegate<WorkspaceModel>;
  hierarchyNode: IPrismaDelegate<HierarchyNodeModel>;
  persona: IPrismaDelegate<PersonaModel>;
  role: IPrismaDelegate<RoleModel>;
  permission: IPrismaDelegate<PermissionModel>;
  device: IPrismaDelegate<DeviceModel>;
  session: IPrismaDelegate<SessionModel>;
  auditLog: IPrismaDelegate<AuditLogModel>;
}

export interface UserModel {
  id: string;
  organizationId: string;
  email: string;
  status: string;
}

export interface OrganizationModel {
  id: string;
  name: string;
  slug: string;
  status: string;
}

export interface WorkspaceModel {
  id: string;
  userId: string;
  hierarchyNodeId: string;
  personaId: string;
  isActive: boolean;
}

export interface HierarchyNodeModel {
  id: string;
  organizationId: string;
  name: string;
  nodeType: string;
  parentNodeId: string | null;
  isActive: boolean;
}

export interface PersonaModel {
  id: string;
  organizationId: string;
  name: string;
  roles?: { roleId: string }[] | string[];
}

export interface RoleModel {
  id: string;
  organizationId: string | null;
  name: string;
  permissions?: { permissionId: string }[] | string[];
}

export interface PermissionModel {
  id: string;
  claim: string;
  description: string;
}

export interface DeviceModel {
  id: string;
  userId: string;
  fingerprint: string;
  isTrusted: boolean;
}

export interface SessionModel {
  id: string;
  userId: string;
  deviceId: string;
  workspaceId: string;
  expiresAt: string | Date;
  status: string;
}

export interface AuditLogModel {
  id: string;
  organizationId: string;
  actorId: string;
  sessionId: string | null;
  action: string;
  targetEntityId: string;
  targetEntityType: string;
  timestamp: string | Date;
  ipAddress: string;
}
