export class ActivitySLA {
  constructor(
    public readonly requiredCompletionDate: Date | null,
    public readonly isBreached: boolean,
  ) {}
}
