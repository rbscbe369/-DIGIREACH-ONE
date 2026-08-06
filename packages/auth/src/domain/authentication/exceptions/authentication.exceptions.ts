import { DomainException } from '../../exceptions/domain.exception';

export class InvalidCredentialsException extends DomainException {
  constructor() {
    super('Invalid credentials');
  }
}

export class AccountLockedException extends DomainException {
  constructor(reason: string) {
    super(`Account is locked: ${reason}`);
  }
}

export class PasswordExpiredException extends DomainException {
  constructor() {
    super('Password has expired');
  }
}

export class InvalidTokenException extends DomainException {
  constructor() {
    super('Invalid or expired token');
  }
}

export class SessionRevokedException extends DomainException {
  constructor() {
    super('Session has been revoked');
  }
}
