import { SalesDimension } from '../value-objects/SalesDimension.vo';
import { SalesPeriod } from '../value-objects/SalesPeriod.vo';
import { SalesKpi } from '../value-objects/SalesKpi.vo';

export class AnalyticsSnapshot {
  private processedEventIds: Set<string> = new Set();

  constructor(
    public readonly snapshotId: string,
    public readonly dimension: SalesDimension,
    public readonly period: SalesPeriod,
    public kpis: SalesKpi,
  ) {}

  public hasProcessed(eventId: string): boolean {
    return this.processedEventIds.has(eventId);
  }

  public markProcessed(eventId: string): void {
    this.processedEventIds.add(eventId);
  }
}
