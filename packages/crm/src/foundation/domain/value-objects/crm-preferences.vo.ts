export class CRMPreferences {
  constructor(
    public readonly uiTheme: string,
    public readonly defaultCurrency: string,
    public readonly timeZone: string,
    public readonly locale: string,
  ) {}
}
