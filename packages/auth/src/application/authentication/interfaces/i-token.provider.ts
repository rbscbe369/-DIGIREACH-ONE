export interface ITokenPayload {
  sub: string;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  [key: string]: unknown;
}

export interface ITokenProvider {
  generateAccessToken(payload: Omit<ITokenPayload, 'iat' | 'exp' | 'nbf' | 'jti'>): Promise<string>;
  generateRefreshToken(
    payload: Omit<ITokenPayload, 'iat' | 'exp' | 'nbf' | 'jti'>,
  ): Promise<string>;
  verifyAccessToken(token: string): Promise<ITokenPayload>;
  verifyRefreshToken(token: string): Promise<ITokenPayload>;
}
