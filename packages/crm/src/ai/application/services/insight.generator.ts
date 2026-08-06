import { ICRMInsightProvider } from '../interfaces/i-crm-insight.provider';
import { CRMInsight } from '../../domain/value-objects/crm-insight.vo';
export class InsightGenerator {
  constructor(private readonly provider: ICRMInsightProvider) {}
  async generate(context: Record<string, unknown>): Promise<CRMInsight> {
    return this.provider.generateInsight(context);
  }
}
