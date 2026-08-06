import { DomainException } from './domain.exception';
export class InvalidOrganizationStateException extends DomainException {
  constructor(msg: string) {
    super(msg);
  }
}
