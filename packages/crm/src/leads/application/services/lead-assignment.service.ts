import { ILeadAssignmentService } from '../interfaces/i-lead-assignment.service';
import { Lead } from '../../domain/entities/lead.entity';
import { LeadAssignment } from '../../domain/value-objects/lead-assignment.vo';

export class LeadAssignmentService implements ILeadAssignmentService {
  async assignLead(_lead: Lead): Promise<LeadAssignment> {
    return new LeadAssignment('default-user', 'MANUAL', new Date(), 'system');
  }
}
