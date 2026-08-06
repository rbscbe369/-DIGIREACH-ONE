export class CustomerPreference {
  constructor(
    public readonly language: string | null,
    public readonly timezone: string | null,
  ) {}
}
