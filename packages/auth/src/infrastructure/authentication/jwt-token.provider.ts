import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import {
  ITokenProvider,
  ITokenPayload,
} from '../../application/authentication/interfaces/i-token.provider';

export class JwtTokenProvider implements ITokenProvider {
  constructor(
    private readonly accessSecret: string,
    private readonly refreshSecret: string,
    private readonly accessExpiresIn: string = '15m',
    private readonly refreshExpiresIn: string = '7d',
  ) {}

  private generateJti(): string {
    return crypto.randomUUID();
  }

  async generateAccessToken(
    payload: Omit<ITokenPayload, 'iat' | 'exp' | 'nbf' | 'jti'>,
  ): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const nbf = iat;
    const jti = this.generateJti();

    return jwt.sign({ ...payload, nbf, jti }, this.accessSecret, {
      expiresIn: this.accessExpiresIn as NonNullable<jwt.SignOptions['expiresIn']>,
    });
  }

  async generateRefreshToken(
    payload: Omit<ITokenPayload, 'iat' | 'exp' | 'nbf' | 'jti'>,
  ): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const nbf = iat;
    const jti = this.generateJti();

    return jwt.sign({ ...payload, nbf, jti }, this.refreshSecret, {
      expiresIn: this.refreshExpiresIn as NonNullable<jwt.SignOptions['expiresIn']>,
    });
  }

  async verifyAccessToken(token: string): Promise<ITokenPayload> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.accessSecret, (err, decoded) => {
        if (err) return reject(new Error('Invalid access token'));
        resolve(decoded as ITokenPayload);
      });
    });
  }

  async verifyRefreshToken(token: string): Promise<ITokenPayload> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this.refreshSecret, (err, decoded) => {
        if (err) return reject(new Error('Invalid refresh token'));
        resolve(decoded as ITokenPayload);
      });
    });
  }
}
