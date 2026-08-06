export class ContactAddress {
  constructor(
    public readonly type: string,
    public readonly street: string | null,
    public readonly city: string | null,
    public readonly state: string | null,
    public readonly country: string | null,
    public readonly postalCode: string | null,
    public readonly isPrimary: boolean,
  ) {}
}

export class ContactPhone {
  constructor(
    public readonly type: string,
    public readonly number: string,
    public readonly isPrimary: boolean,
  ) {}
}

export class ContactEmail {
  constructor(
    public readonly type: string,
    public readonly address: string,
    public readonly isPrimary: boolean,
  ) {}
}

export class ContactSocialProfile {
  constructor(
    public readonly platform: string,
    public readonly url: string,
  ) {}
}

export class ContactName {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly middleName: string | null,
    public readonly prefix: string | null,
    public readonly suffix: string | null,
  ) {}
}

export class ContactProfile {
  constructor(
    public readonly name: ContactName,
    public readonly emails: ContactEmail[],
    public readonly phones: ContactPhone[],
    public readonly addresses: ContactAddress[],
    public readonly social: ContactSocialProfile[],
    public readonly emergencyContact: Record<string, unknown> | null,
    public readonly customFields: Record<string, unknown>,
  ) {}
}
