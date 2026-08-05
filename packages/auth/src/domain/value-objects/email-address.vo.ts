export class EmailAddress {
  constructor(public readonly value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format');
    }
    this.value = value.toLowerCase();
  }
  equals(other: EmailAddress): boolean {
    return other !== null && other !== undefined && other.value === this.value;
  }
}