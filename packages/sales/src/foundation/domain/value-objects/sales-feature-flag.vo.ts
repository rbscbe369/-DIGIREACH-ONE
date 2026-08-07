export class SalesFeatureFlag {
  constructor(
    public readonly flag: string,
    public readonly enabled: boolean,
  ) {}
}
