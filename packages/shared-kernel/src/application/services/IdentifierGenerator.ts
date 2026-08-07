import { IIdGenerator } from '../interfaces/IIdGenerator';
export class IdentifierGenerator {
  constructor(private readonly provider: IIdGenerator) {}
  generate(): string {
    return this.provider.generate();
  }
}
