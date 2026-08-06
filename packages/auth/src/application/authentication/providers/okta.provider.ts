import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';

export class OktaProvider implements IAuthenticationProvider {
  public readonly name = 'OKTA';

  async authenticate(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }
}
