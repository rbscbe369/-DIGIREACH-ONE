import { Identifier } from '../identifiers/Identifier.vo';
export abstract class Entity<T extends Identifier> {
  protected constructor(public readonly id: T) {}
  public equals(other?: Entity<T>): boolean {
    if (other === null || other === undefined) return false;
    if (this === other) return true;
    return this.id.equals(other.id);
  }
}
