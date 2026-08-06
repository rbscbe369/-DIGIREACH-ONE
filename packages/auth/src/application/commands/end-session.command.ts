export class EndSessionCommand {
  constructor(
    public readonly sessionId: string,
    public readonly userId: string,
  ) {}
}
