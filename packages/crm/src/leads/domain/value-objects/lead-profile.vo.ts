export class LeadAddress {
  constructor(
    public readonly street: string | null,
    public readonly city: string | null,
    public readonly state: string | null,
    public readonly country: string | null,
    public readonly postalCode: string | null,
  ) {}
}

export class LeadSocialProfile {
  constructor(
    public readonly linkedIn: string | null,
    public readonly twitter: string | null,
    public readonly facebook: string | null,
  ) {}
}

export class LeadProfile {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string | null,
    public readonly phone: string | null,
    public readonly company: string | null,
    public readonly jobTitle: string | null,
    public readonly industry: string | null,
    public readonly address: LeadAddress,
    public readonly social: LeadSocialProfile,
    public readonly customFields: Record<string, unknown>,
  ) {}
}
