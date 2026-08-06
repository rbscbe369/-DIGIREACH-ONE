export interface DomainEvent {
  occurredOn: Date;
  eventName: string;
}

export class DocumentCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentCreatedEvent';
  constructor(public readonly documentId: string) {}
}

export class DocumentUpdatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentUpdatedEvent';
  constructor(public readonly documentId: string) {}
}

export class DocumentVersionUploadedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentVersionUploadedEvent';
  constructor(
    public readonly documentId: string,
    public readonly versionId: string,
  ) {}
}

export class DocumentMovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentMovedEvent';
  constructor(
    public readonly documentId: string,
    public readonly newFolderId: string,
  ) {}
}

export class DocumentDeletedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentDeletedEvent';
  constructor(public readonly documentId: string) {}
}

export class DocumentArchivedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'DocumentArchivedEvent';
  constructor(public readonly documentId: string) {}
}

export class FolderCreatedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'FolderCreatedEvent';
  constructor(public readonly folderId: string) {}
}

export class FolderMovedEvent implements DomainEvent {
  public readonly occurredOn = new Date();
  public readonly eventName = 'FolderMovedEvent';
  constructor(
    public readonly folderId: string,
    public readonly newParentId: string,
  ) {}
}
