import { ValueObject } from '../base/ValueObject';
export interface AddressProps {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}
export class Address extends ValueObject<AddressProps> {
  constructor(props: AddressProps) {
    super(props);
  }
}
