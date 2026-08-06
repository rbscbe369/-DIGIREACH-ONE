import { CustomerTouchpoint } from './customer-touchpoint.vo';

export class CustomerJourney {
  constructor(
    public readonly firstTouchDate: Date | null,
    public readonly leadCreatedDate: Date | null,
    public readonly qualificationDate: Date | null,
    public readonly totalMeetings: number,
    public readonly totalCalls: number,
    public readonly totalEmails: number,
    public readonly proposalsSent: number,
    public readonly negotiationsCount: number,
    public readonly purchaseCount: number,
    public readonly renewalsCount: number,
    public readonly supportCasesCount: number,
    public readonly expansionCount: number,
    public readonly touchpoints: CustomerTouchpoint[] = [],
  ) {}
}
