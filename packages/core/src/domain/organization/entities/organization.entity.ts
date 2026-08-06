import { BrandProfile } from '../value-objects/brand-profile.vo';
import { BusinessCalendar } from '../value-objects/business-calendar.vo';
import { CurrencyProfile, TaxProfile } from '../value-objects/currency-tax-profile.vo';
import { OrganizationMetadata } from '../value-objects/organization-metadata.vo';
import { LocationProfile } from '../value-objects/location-profile.vo';

export class Organization {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly legalName: string,
    public readonly tenantId: string,
    public readonly brand: BrandProfile,
    public readonly calendar: BusinessCalendar,
    public readonly currency: CurrencyProfile,
    public readonly tax: TaxProfile,
    public readonly metadata: OrganizationMetadata,
    public readonly defaultLocation: LocationProfile,
    public readonly isActive: boolean,
  ) {}
}
