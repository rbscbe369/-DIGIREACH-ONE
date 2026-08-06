export class LeadAssignment {
  constructor(
    public readonly assigneeId: string,
    public readonly assignmentType:
      'MANUAL' | 'ROUND_ROBIN' | 'TERRITORY' | 'LOAD_BALANCED' | 'AI_RECOMMENDATION',
    public readonly assignedAt: Date,
    public readonly assignedBy: string | null,
  ) {}
}
