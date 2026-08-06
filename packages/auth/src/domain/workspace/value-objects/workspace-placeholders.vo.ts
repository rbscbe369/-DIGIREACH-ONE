export class WorkspaceSearchProvider {
  constructor(public readonly providerId: string) {}
}

export class WorkspaceNotificationCenter {
  constructor(public readonly providerId: string) {}
}

export class WorkspaceExtension {
  constructor(
    public readonly extensionId: string,
    public readonly version: string,
  ) {}
}
