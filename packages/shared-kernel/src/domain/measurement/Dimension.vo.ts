import { ValueObject } from '../base/ValueObject';
import { UnitOfMeasureReference } from './UnitOfMeasureReference.vo';
import { DomainError } from '../base/DomainError';
export interface DimensionProps {
  length: number;
  width: number;
  height: number;
  uom: UnitOfMeasureReference;
}
export class Dimension extends ValueObject<DimensionProps> {
  constructor(props: DimensionProps) {
    super(props);
    if (props.length < 0 || props.width < 0 || props.height < 0)
      throw new DomainError('Dimensions cannot be negative');
  }
}
