import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';

export class MicrosoftProvider implements IAuthenticationProvider {
  public readonly name = 'MICROSOFT';

  async authenticate(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }
}
