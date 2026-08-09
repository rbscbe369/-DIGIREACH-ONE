export enum RenewalType {
  AutoRenew = 'AutoRenew',
  ManualRenewal = 'ManualRenewal',
  None = 'None',
}

export class RenewalPolicy {
  constructor(
    public readonly type: RenewalType,
    public readonly renewalTermMonths: number | null,
  ) {
    if (type === RenewalType.AutoRenew && (renewalTermMonths === null || renewalTermMonths <= 0)) {
      throw new Error('Auto-renew policy requires a positive renewal term in months.');
    }
  }
}
