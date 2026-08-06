import * as argon2 from 'argon2';
import { IPasswordHasher } from '../../application/authentication/interfaces/i-password.hasher';

export class Argon2PasswordHasher implements IPasswordHasher {
  constructor(
    private readonly memoryCost: number = 65536,
    private readonly timeCost: number = 3,
    private readonly parallelism: number = 4,
  ) {}

  async hash(password: string): Promise<string> {
    return argon2.hash(password, {
      type: argon2.argon2id,
      memoryCost: this.memoryCost,
      timeCost: this.timeCost,
      parallelism: this.parallelism,
    });
  }

  async verify(hash: string, plain: string): Promise<boolean> {
    try {
      return await argon2.verify(hash, plain);
    } catch {
      return false;
    }
  }
}
