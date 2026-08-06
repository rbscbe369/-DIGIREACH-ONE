export class AccountEmail {
  constructor(
    public readonly type: string,
    public readonly address: string,
    public readonly isPrimary: boolean,
  ) {}
}

export class AccountPhone {
  constructor(
    public readonly type: string,
    public readonly number: string,
    public readonly isPrimary: boolean,
  ) {}
}

export class AccountWebsite {
  constructor(
    public readonly type: string,
    public readonly url: string,
    public readonly isPrimary: boolean,
  ) {}
}

export class AccountSocialProfile {
  constructor(
    public readonly platform: string,
    public readonly handle: string,
  ) {}
}

export class AccountCommunication {
  constructor(
    public readonly emails: AccountEmail[],
    public readonly phones: AccountPhone[],
    public readonly websites: AccountWebsite[],
    public readonly socialProfiles: AccountSocialProfile[],
    public readonly supportContacts: string[],
    public readonly salesContacts: string[],
    public readonly billingContacts: string[],
    public readonly technicalContacts: string[],
    public readonly emergencyContacts: string[],
  ) {}
}
