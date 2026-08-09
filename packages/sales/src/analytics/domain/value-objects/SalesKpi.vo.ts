import { Money } from '@digireach-one/shared-kernel';

export class SalesKpi {
  constructor(
    // Quote KPIs
    public quoteCount: number = 0,
    public quoteValue: Money,
    public acceptedQuoteCount: number = 0,
    public rejectedQuoteCount: number = 0,
    public expiredQuoteCount: number = 0,
    // Conversion KPIs
    public convertedToOrderCount: number = 0,
    // Order KPIs
    public orderCount: number = 0,
    public orderValue: Money,
    // Contract KPIs
    public contractCount: number = 0,
    public activatedContractCount: number = 0,
    public contractOneTimeValue: Money,
    public contractRecurringValue: Money,
  ) {}
}
