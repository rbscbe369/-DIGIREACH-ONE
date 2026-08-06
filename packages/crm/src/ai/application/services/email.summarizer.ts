import { EmailSummary } from '../../domain/value-objects/email-summary.vo';
export class EmailSummarizer {
  summarize(_data: unknown): EmailSummary {
    return new EmailSummary('Neutral', null);
  }
}
