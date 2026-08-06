import { ITokenProvider, ITokenPayload } from '../interfaces/i-token.provider';

export class TokenService {
  constructor(private readonly tokenProvider: ITokenProvider) {}

  async createTokenPair(userId: string, sessionId: string, audience: string) {
    const payload = {
      sub: userId,
      iss: 'digireach-one',
      aud: audience,
      sessionId,
    };

    const accessToken = await this.tokenProvider.generateAccessToken(payload);
    const refreshToken = await this.tokenProvider.generateRefreshToken(payload);

    return { accessToken, refreshToken };
  }

  async verifyAccessToken(token: string): Promise<ITokenPayload> {
    return this.tokenProvider.verifyAccessToken(token);
  }

  async verifyRefreshToken(token: string): Promise<ITokenPayload> {
    return this.tokenProvider.verifyRefreshToken(token);
  }
}
