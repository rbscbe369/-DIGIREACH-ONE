import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';

export class SamlProvider implements IAuthenticationProvider {
  public readonly name = 'SAML';

  async authenticate(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }
}
