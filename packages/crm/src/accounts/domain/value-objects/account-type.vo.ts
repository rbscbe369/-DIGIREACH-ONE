export type AccountTypeValue =
  | 'CUSTOMER'
  | 'PROSPECT'
  | 'PARTNER'
  | 'VENDOR'
  | 'SUPPLIER'
  | 'DISTRIBUTOR'
  | 'DEALER'
  | 'GOVERNMENT'
  | 'EDUCATIONAL_INSTITUTION'
  | 'HOSPITAL'
  | 'NGO'
  | 'INDIVIDUAL_BUSINESS'
  | 'CORPORATE'
  | 'ENTERPRISE'
  | 'OTHER';

export class AccountType {
  constructor(public readonly value: AccountTypeValue) {}
}
