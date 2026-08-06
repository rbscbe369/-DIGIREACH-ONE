export class CustomerTouchpoint {
  constructor(
    public readonly touchpointId: string,
    public readonly channel: string,
    public readonly date: Date,
  ) {}
}
