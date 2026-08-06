import { NotificationPriority } from './notification-priority.vo';

export enum PolicyLevel {
  PLATFORM = 'PLATFORM',
  COMPLIANCE = 'COMPLIANCE',
  ORGANIZATION = 'ORGANIZATION',
  BUSINESS = 'BUSINESS',
  USER = 'USER',
}

export class NotificationPolicy {
  constructor(
    public readonly level: PolicyLevel,
    public readonly forceDelivery: boolean,
    public readonly enforcedPriority: NotificationPriority | null,
  ) {}
}
