import { Lead } from '../../domain/entities/lead.entity';
import { LeadAssignment } from '../../domain/value-objects/lead-assignment.vo';

export interface ILeadAssignmentService {
  assignLead(lead: Lead): Promise<LeadAssignment>;
}
