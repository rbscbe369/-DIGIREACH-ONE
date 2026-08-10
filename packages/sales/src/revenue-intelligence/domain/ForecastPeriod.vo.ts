export type ForecastPeriodType = 'Day' | 'Week' | 'Month' | 'Quarter' | 'Year' | 'Custom';

export class ForecastPeriod {
  constructor(
    public readonly type: ForecastPeriodType,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {}

  static fromDate(date: Date, type: ForecastPeriodType): ForecastPeriod {
    const start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const end = new Date(start);

    switch (type) {
      case 'Day':
        end.setUTCDate(start.getUTCDate() + 1);
        break;
      case 'Month':
        start.setUTCDate(1);
        end.setUTCFullYear(start.getUTCFullYear(), start.getUTCMonth() + 1, 1);
        break;
      case 'Quarter': {
        const quarterMonth = Math.floor(start.getUTCMonth() / 3) * 3;
        start.setUTCMonth(quarterMonth, 1);
        end.setUTCFullYear(start.getUTCFullYear(), quarterMonth + 3, 1);
        break;
      }
      case 'Year':
        start.setUTCMonth(0, 1);
        end.setUTCFullYear(start.getUTCFullYear() + 1, 0, 1);
        break;
      default:
        end.setUTCDate(start.getUTCDate() + 1);
    }

    return new ForecastPeriod(type, start, new Date(end.getTime() - 1));
  }
}
