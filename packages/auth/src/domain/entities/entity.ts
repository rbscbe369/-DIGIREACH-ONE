import { DomainEvent } from '../events/domain.event';

export abstract class Entity<TId> {
  private readonly _domainEvents: DomainEvent[] = [];

  constructor(public readonly id: TId) {}

  get domainEvents(): DomainEvent[] {
    return [...this._domainEvents];
  }

  protected addDomainEvent(event: DomainEvent): void {
    this._domainEvents.push(event);
  }

  public clearEvents(): void {
    this._domainEvents.length = 0;
  }
}