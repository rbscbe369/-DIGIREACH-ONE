export class AccountTerritory {
  constructor(
    public readonly territoryId: string,
    public readonly territoryName: string | null,
    public readonly isPrimary: boolean,
  ) {}
}
