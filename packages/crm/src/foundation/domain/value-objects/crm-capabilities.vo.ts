export class CRMCapability {
  constructor(
    public readonly capabilityId: string,
    public readonly name: string,
    public readonly description: string,
    public readonly isEnabled: boolean,
  ) {}
}

export class CRMCapabilities {
  constructor(public readonly capabilities: CRMCapability[]) {}
}
