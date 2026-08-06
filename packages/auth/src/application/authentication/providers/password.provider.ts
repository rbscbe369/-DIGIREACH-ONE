import {
  IAuthenticationProvider,
  IAuthenticationResult,
} from '../interfaces/i-authentication.provider';
import { IPasswordHasher } from '../interfaces/i-password.hasher';

export class PasswordProvider implements IAuthenticationProvider {
  public readonly name = 'PASSWORD';

  constructor(private readonly passwordHasher: IPasswordHasher) {}

  async authenticate(credentials: Record<string, unknown>): Promise<IAuthenticationResult> {
    const { email, password } = credentials;
    if (!email || !password) return { success: false, error: 'Missing credentials' };

    // Placeholder: Fetch user from DB by email
    const storedHash = '$argon2id$v=19$m=65536,t=3,p=4$dummy'; // Dummy
    const isValid = await this.passwordHasher.verify(storedHash, password as string);

    if (!isValid) return { success: false, error: 'Invalid credentials' };

    return { success: true, userId: 'user-id-placeholder' };
  }

  async validateChallenge(): Promise<IAuthenticationResult> {
    throw new Error('No challenge support for standard password provider');
  }
}
