import { DomainException } from '../../exceptions/domain.exception';

export class ContextResolutionException extends DomainException {
  constructor(message: string) {
    super(`Context Resolution Failed: ${message}`);
  }
}

export class InvalidContextException extends DomainException {
  constructor(message: string) {
    super(`Invalid Context: ${message}`);
  }
}
