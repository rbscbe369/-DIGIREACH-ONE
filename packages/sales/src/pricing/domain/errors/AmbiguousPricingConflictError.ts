export class AmbiguousPricingConflictError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AmbiguousPricingConflictError';
  }
}
