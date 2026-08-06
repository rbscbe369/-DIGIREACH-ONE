export class InviteUserCommand {
  constructor(
    public readonly organizationId: string,
    public readonly email: string,
    public readonly inviterUserId: string,
  ) {}
}
