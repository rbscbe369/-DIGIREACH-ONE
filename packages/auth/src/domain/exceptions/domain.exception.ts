export abstract class DomainException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    if ('captureStackTrace' in Error) {
      (
        Error as unknown as { captureStackTrace: (target: unknown, constructor: unknown) => void }
      ).captureStackTrace(this, DomainException);
    }
  }
}
