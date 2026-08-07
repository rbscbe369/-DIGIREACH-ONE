export class InvalidOrderTransitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidOrderTransitionError';
  }
}
