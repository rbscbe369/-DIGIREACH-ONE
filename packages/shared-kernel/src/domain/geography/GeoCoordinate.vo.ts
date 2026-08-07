import { ValueObject } from '../base/ValueObject';
import { DomainError } from '../base/DomainError';
export interface GeoProps {
  latitude: number;
  longitude: number;
}
export class GeoCoordinate extends ValueObject<GeoProps> {
  constructor(props: GeoProps) {
    super(props);
    if (props.latitude < -90 || props.latitude > 90) throw new DomainError('Invalid Latitude');
    if (props.longitude < -180 || props.longitude > 180) throw new DomainError('Invalid Longitude');
  }
}
