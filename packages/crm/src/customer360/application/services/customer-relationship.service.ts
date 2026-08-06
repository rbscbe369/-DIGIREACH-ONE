import { Customer360 } from '../../domain/entities/customer360.entity';
import { RelationshipNode } from '../../domain/value-objects/customer-relationship-graph.vo';

export class CustomerRelationshipService {
  addRelationshipNode(customer: Customer360, node: RelationshipNode): void {
    customer.relationshipGraph.nodes.push(node);
  }
}
