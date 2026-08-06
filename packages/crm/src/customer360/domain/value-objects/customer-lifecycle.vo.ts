export class CustomerLifecycle {
  constructor(
    public readonly currentStage: string,
    public readonly timeInStageDays: number,
  ) {}
}
