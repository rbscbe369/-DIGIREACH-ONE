import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
import { UnitOfMeasureReference } from './UnitOfMeasureReference.vo';
export interface WeightProps {
  value: number;
  uom: UnitOfMeasureReference;
}
export class Weight extends ValueObject<WeightProps> {
  constructor(props: WeightProps) {
    super(props);
    if (props.value < 0) throw new DomainError('Weight cannot be negative');
  }
}
