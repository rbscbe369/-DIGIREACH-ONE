export class PasswordHash {
  constructor(public readonly value: string) {
    if (!value.startsWith('$argon2')) {
      throw new Error('Invalid password hash format');
    }
  }
}
