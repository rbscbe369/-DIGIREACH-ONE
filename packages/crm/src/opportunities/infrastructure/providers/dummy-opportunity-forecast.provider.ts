import { IOpportunityForecastProvider } from '../../application/interfaces/i-opportunity-forecast.provider';
import { Opportunity } from '../../domain/entities/opportunity.entity';
import { OpportunityForecast } from '../../domain/value-objects/opportunity-forecast.vo';

export class DummyForecastProvider implements IOpportunityForecastProvider {
  async generateForecast(_opportunity: Opportunity): Promise<OpportunityForecast> {
    return new OpportunityForecast('PIPELINE', new Date(), 50);
  }
}
