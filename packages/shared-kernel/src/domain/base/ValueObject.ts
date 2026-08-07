export abstract class ValueObject<T> {
  protected constructor(public readonly props: T) {}
  public equals(vo?: ValueObject<T>): boolean {
    if (vo === null || vo === undefined) return false;
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}
