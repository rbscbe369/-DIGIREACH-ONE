export interface SessionDto {
  id: string;
  userId: string;
  deviceId: string;
  workspaceId: string;
  expiresAt: Date;
  status: string;
}
