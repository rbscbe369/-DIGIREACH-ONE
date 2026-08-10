import { Money } from '@digireach-one/shared-kernel';

export class DealState {
  constructor(
    public readonly opportunityId: string,
    public readonly amount: Money,
    public readonly probability: number,
    public readonly status: string,
    public readonly stage: string,
    public readonly expectedCloseDate: Date,
    public readonly lastUpdatedAt: Date,
  ) {}
}
