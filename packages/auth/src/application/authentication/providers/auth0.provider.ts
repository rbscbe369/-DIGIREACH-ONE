import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';

export class Auth0Provider implements IAuthenticationProvider {
  public readonly name = 'AUTH0';

  async authenticate(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }
}
