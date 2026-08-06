import { CallSummary } from '../../domain/value-objects/call-summary.vo';
export class CallSummarizer {
  summarize(_data: unknown): CallSummary {
    return new CallSummary('Summary', []);
  }
}
