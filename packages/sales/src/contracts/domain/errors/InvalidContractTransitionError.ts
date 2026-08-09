export class InvalidContractTransitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidContractTransitionError';
  }
}
