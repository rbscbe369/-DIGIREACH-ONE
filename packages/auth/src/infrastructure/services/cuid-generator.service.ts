import { IIdGenerator } from '../../application/interfaces/i-id-generator.interface';
import * as crypto from 'crypto';

export class CuidGenerator implements IIdGenerator {
  generate(): string {
    return crypto.randomUUID();
  }
}
