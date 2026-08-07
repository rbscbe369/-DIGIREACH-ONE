export class ProductCompliance {
  constructor(
    public readonly isRoHSCompliant: boolean,
    public readonly isREACHCompliant: boolean,
    public readonly ceMarking: boolean,
    public readonly fdaApproved: boolean,
    public readonly isoCertifications: string[],
    public readonly hazardousMaterial: boolean,
    public readonly exportRestrictions: string[],
    public readonly countryRestrictions: string[],
    public readonly environmentalCompliance: string[],
  ) {}
}
