import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityRelationship } from '../../domain/value-objects/opportunity-relationship.vo';

export class OpportunityRelationshipService {
  async addRelationship(
    opportunity: Opportunity,
    relationship: OpportunityRelationship,
  ): Promise<void> {
    opportunity.relationships.push(relationship);
  }
}
