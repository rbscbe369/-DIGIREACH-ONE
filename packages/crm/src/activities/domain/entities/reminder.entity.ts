export class Reminder {
  constructor(
    public readonly reminderId: string,
    public readonly activityId: string,
    public readonly reminderTime: Date,
    public readonly reminderMethod: 'EMAIL' | 'SMS' | 'IN_APP' | 'SYSTEM',
    public readonly reminderFrequency: string | null,
    public readonly reminderOffset: number | null,
    public readonly reminderStatus: 'PENDING' | 'TRIGGERED' | 'DISMISSED',
    public readonly escalationFlag: boolean,
  ) {}
}
