import { ForecastInsight } from '../../domain/value-objects/forecast-insight.vo';
export class ForecastGenerator {
  generate(_data: unknown): ForecastInsight {
    return new ForecastInsight(0, 'N/A');
  }
}
