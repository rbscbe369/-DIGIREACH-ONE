import { ValueObject } from '../base/ValueObject';
import { UnitOfMeasureReference } from './UnitOfMeasureReference.vo';
import { DomainError } from '../base/DomainError';
export interface VolumeProps {
  value: number;
  uom: UnitOfMeasureReference;
}
export class Volume extends ValueObject<VolumeProps> {
  constructor(props: VolumeProps) {
    super(props);
    if (props.value < 0) throw new DomainError('Volume cannot be negative');
  }
}
