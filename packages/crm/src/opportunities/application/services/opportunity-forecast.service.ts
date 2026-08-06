import { IOpportunityForecastProvider } from '../interfaces/i-opportunity-forecast.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityForecast } from '../../domain/value-objects/opportunity-forecast.vo';

export class OpportunityForecastService {
  constructor(private readonly provider: IOpportunityForecastProvider) {}

  async forecast(opportunity: Opportunity): Promise<OpportunityForecast> {
    return this.provider.generateForecast(opportunity);
  }
}
