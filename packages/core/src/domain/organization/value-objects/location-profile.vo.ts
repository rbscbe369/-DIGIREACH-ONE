export class LocationProfile {
  constructor(
    public readonly addressLine1: string,
    public readonly addressLine2: string | null,
    public readonly city: string,
    public readonly stateProvince: string,
    public readonly postalCode: string,
    public readonly countryCode: string,
    public readonly latitude: number | null,
    public readonly longitude: number | null,
    public readonly polygon: string | null,
    public readonly geoFenceRadiusMeters: number | null,
  ) {}
}
