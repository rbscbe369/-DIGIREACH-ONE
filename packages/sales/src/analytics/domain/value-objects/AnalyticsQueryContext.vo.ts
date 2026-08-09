import { SalesPeriod } from './SalesPeriod.vo';
import { SalesDimension } from './SalesDimension.vo';

export class AnalyticsQueryContext {
  constructor(
    public readonly dimension: SalesDimension,
    public readonly period: SalesPeriod,
  ) {}
}
