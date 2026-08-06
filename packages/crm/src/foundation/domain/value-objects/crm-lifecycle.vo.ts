export class CRMLifecycle {
  constructor(
    public readonly state: string,
    public readonly enteredAt: Date,
    public readonly previousState: string | null,
  ) {}
}
