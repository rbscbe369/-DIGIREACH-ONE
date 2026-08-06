export class Availability {
  constructor(
    public readonly availabilityId: string,
    public readonly entityId: string, // User or Resource
    public readonly entityType: 'USER' | 'RESOURCE',
    public status:
      | 'AVAILABLE'
      | 'BUSY'
      | 'TENTATIVE'
      | 'OUT_OF_OFFICE'
      | 'WORKING'
      | 'HOLIDAY'
      | 'BLOCKED'
      | 'TRAVEL',
    public startTime: Date,
    public endTime: Date,
  ) {}
}
