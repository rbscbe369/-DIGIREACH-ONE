import { ValueObject } from '../base/ValueObject';
import { LocalDate } from '../datetime/LocalDate.vo';
export interface CompatibilityProps {
  deprecatedSince: LocalDate | null;
  supportedUntil: LocalDate | null;
  breakingChange: boolean;
}
export class CompatibilityMetadata extends ValueObject<CompatibilityProps> {
  constructor(props: CompatibilityProps) {
    super(props);
  }
}
