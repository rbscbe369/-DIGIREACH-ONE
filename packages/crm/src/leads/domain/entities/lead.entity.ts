import { LeadProfile } from '../value-objects/lead-profile.vo';
import { LeadAssignment } from '../value-objects/lead-assignment.vo';
import { LeadQualification } from '../value-objects/lead-qualification.vo';
import { LeadScore } from '../value-objects/lead-score.vo';
import { LeadTimeline } from './lead-timeline.entity';
import { LeadCommunication } from '../value-objects/lead-communication.vo';
import { LeadAIProfile } from '../value-objects/lead-ai-profile.vo';
import { LeadStatus } from '../value-objects/lead-status.vo';
import { LeadSource } from '../value-objects/lead-source.vo';
import { LeadPriority } from '../value-objects/lead-priority.vo';

export class Lead {
  constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly profile: LeadProfile,
    public status: LeadStatus,
    public readonly source: LeadSource,
    public readonly priority: LeadPriority,
    public assignment: LeadAssignment | null,
    public qualification: LeadQualification,
    public score: LeadScore,
    public readonly timeline: LeadTimeline,
    public communications: LeadCommunication[],
    public aiProfile: LeadAIProfile,
  ) {}

  public convert(): void {
    this.status = new LeadStatus('CONVERTED', 'Successfully converted', new Date());
  }
}
