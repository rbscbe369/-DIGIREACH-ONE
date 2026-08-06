import { ICRMInsightProvider } from '../../application/interfaces/i-crm-insight.provider';
import { CRMInsight } from '../../domain/value-objects/crm-insight.vo';

export class DummyInsightProvider implements ICRMInsightProvider {
  async generateInsight(_context: Record<string, unknown>): Promise<CRMInsight> {
    return new CRMInsight('DUMMY', 'Observation', 0.99);
  }
}
