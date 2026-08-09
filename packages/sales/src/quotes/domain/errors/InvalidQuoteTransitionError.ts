export class InvalidQuoteTransitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidQuoteTransitionError';
  }
}
