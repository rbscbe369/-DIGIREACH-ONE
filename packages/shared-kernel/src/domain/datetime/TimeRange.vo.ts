import { ValueObject } from '../base/ValueObject';
import { Timestamp } from './Timestamp.vo';
import { DomainError } from '../base/DomainError';
export interface TimeRangeProps {
  start: Timestamp;
  end: Timestamp;
}
export class TimeRange extends ValueObject<TimeRangeProps> {
  constructor(props: TimeRangeProps) {
    super(props);
    if (props.start.props > props.end.props)
      throw new DomainError('Start time must be before end time');
  }
}
