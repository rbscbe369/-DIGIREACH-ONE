import { OpportunityStakeholder } from './opportunity-stakeholder.vo';

export class OpportunityBuyingCommittee {
  constructor(public readonly stakeholders: OpportunityStakeholder[] = []) {}
}
