export interface IAuthenticationChallenge {
  type: string;
  payload: Record<string, unknown>;
}

export interface IAuthenticationResult {
  success: boolean;
  userId?: string;
  challenge?: IAuthenticationChallenge;
  error?: string;
}

export interface IAuthenticationProvider {
  readonly name: string;
  authenticate(credentials: Record<string, unknown>): Promise<IAuthenticationResult>;
  validateChallenge(
    challengeId: string,
    response: Record<string, unknown>,
  ): Promise<IAuthenticationResult>;
}
