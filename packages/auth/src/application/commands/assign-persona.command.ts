export class AssignPersonaCommand {
  constructor(
    public readonly userId: string,
    public readonly personaId: string,
    public readonly adminUserId: string
  ) {}
}