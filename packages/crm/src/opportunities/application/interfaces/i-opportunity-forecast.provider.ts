import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityForecast } from '../../domain/value-objects/opportunity-forecast.vo';

export interface IOpportunityForecastProvider {
  generateForecast(opportunity: Opportunity): Promise<OpportunityForecast>;
}
