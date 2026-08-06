import { CRMInsight } from '../../domain/value-objects/crm-insight.vo';
export interface ICRMInsightProvider {
  generateInsight(context: Record<string, unknown>): Promise<CRMInsight>;
}
