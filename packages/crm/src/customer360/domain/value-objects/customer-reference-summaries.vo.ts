export class LeadSummary {
  constructor(
    public readonly leadId: string,
    public readonly status: string,
  ) {}
}
export class ContactSummary {
  constructor(
    public readonly contactId: string,
    public readonly role: string,
  ) {}
}
export class AccountSummary {
  constructor(
    public readonly accountId: string,
    public readonly tier: string,
  ) {}
}
export class OpportunitySummary {
  constructor(
    public readonly opportunityId: string,
    public readonly stage: string,
    public readonly value: number,
  ) {}
}
export class ActivitySummary {
  constructor(
    public readonly activityId: string,
    public readonly type: string,
    public readonly status: string,
  ) {}
}
export class CalendarSummary {
  constructor(
    public readonly meetingId: string,
    public readonly nextMeetingDate: Date | null,
  ) {}
}
export class DocumentSummary {
  constructor(
    public readonly documentId: string,
    public readonly title: string,
  ) {}
}
export class WorkflowSummary {
  constructor(
    public readonly workflowId: string,
    public readonly status: string,
  ) {}
}

export class CustomerReferenceSummaries {
  constructor(
    public readonly leads: LeadSummary[] = [],
    public readonly contacts: ContactSummary[] = [],
    public readonly accounts: AccountSummary[] = [],
    public readonly opportunities: OpportunitySummary[] = [],
    public readonly activities: ActivitySummary[] = [],
    public readonly calendars: CalendarSummary[] = [],
    public readonly documents: DocumentSummary[] = [],
    public readonly workflows: WorkflowSummary[] = [],
  ) {}
}
