export class CustomerProfile {
  constructor(
    public readonly name: string,
    public readonly summary: string | null,
    public readonly avatarUrl: string | null,
  ) {}
}
