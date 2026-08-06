export class TokenFingerprint {
  constructor(public readonly value: string) {
    if (!value) throw new Error('Token fingerprint cannot be empty');
  }
}
