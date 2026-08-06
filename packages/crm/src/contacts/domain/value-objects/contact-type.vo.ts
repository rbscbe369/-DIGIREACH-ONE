export type ContactTypeValue =
  | 'INDIVIDUAL'
  | 'BUSINESS'
  | 'CUSTOMER'
  | 'PROSPECT'
  | 'PARTNER'
  | 'VENDOR'
  | 'EMPLOYEE'
  | 'INFLUENCER'
  | 'OTHER';

export class ContactType {
  constructor(public readonly value: ContactTypeValue) {}
}
