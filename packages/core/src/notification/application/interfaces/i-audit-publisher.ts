export interface IAuditPublisher {
  publishNotificationResult(
    notificationId: string,
    status: string,
    details: Record<string, unknown>,
  ): Promise<void>;
}
