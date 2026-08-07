import { ValueObject } from '../base/ValueObject';
import { LocalDate } from './LocalDate.vo';
import { DomainError } from '../base/DomainError';
export interface DateRangeProps {
  start: LocalDate;
  end: LocalDate;
}
export class DateRange extends ValueObject<DateRangeProps> {
  constructor(props: DateRangeProps) {
    super(props);
    if (new Date(props.start.props) > new Date(props.end.props)) {
      throw new DomainError('Start date must be before end date');
    }
  }
}
