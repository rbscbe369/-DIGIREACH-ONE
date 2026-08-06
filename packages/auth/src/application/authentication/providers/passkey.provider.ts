import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';

export class PasskeyProvider implements IAuthenticationProvider {
  public readonly name = 'PASSKEY';

  async authenticate(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('Not implemented');
  }
}
