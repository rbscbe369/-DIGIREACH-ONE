import { IAuthenticationProvider } from '../interfaces/i-authentication.provider';
import { TokenService } from './token.service';

export class AuthenticationEngine {
  private providers = new Map<string, IAuthenticationProvider>();

  constructor(private readonly tokenService: TokenService) {}

  registerProvider(provider: IAuthenticationProvider) {
    this.providers.set(provider.name, provider);
  }

  async authenticate(providerName: string, credentials: Record<string, unknown>) {
    const provider = this.providers.get(providerName);
    if (!provider) throw new Error(`Provider ${providerName} not found`);

    const result = await provider.authenticate(credentials);
    if (!result.success || !result.userId) {
      throw new Error(result.error || 'Authentication failed');
    }

    // After success, create session and tokens...
    const sessionId = 'session-id-placeholder';
    const tokens = await this.tokenService.createTokenPair(
      result.userId,
      sessionId,
      'digireach-audience',
    );

    return {
      userId: result.userId,
      sessionId,
      ...tokens,
    };
  }
}
