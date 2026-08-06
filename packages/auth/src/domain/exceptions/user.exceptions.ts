import { DomainException } from './domain.exception';
export class UserSuspendedException extends DomainException {
  constructor(userId: string) {
    super(`User ${userId} is suspended and cannot perform this action.`);
  }
}
export class UserNotActiveException extends DomainException {
  constructor(userId: string) {
    super(`User ${userId} is not active.`);
  }
}
