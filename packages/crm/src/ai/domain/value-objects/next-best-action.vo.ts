export class NextBestAction {
  constructor(
    public readonly actionType: string,
    public readonly rationale: string,
    public readonly targetEntityId: string,
  ) {}
}
