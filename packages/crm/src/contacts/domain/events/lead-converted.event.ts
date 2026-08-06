// Abstract Platform Event received from Event Bus
export interface LeadConvertedEventPayload {
  leadId: string;
  tenantId: string;
  timestamp: Date;
  metadata: Record<string, unknown>;
}
