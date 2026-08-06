import { MeetingSummary } from '../../domain/value-objects/meeting-summary.vo';
export class MeetingSummarizer {
  summarize(_data: unknown): MeetingSummary {
    return new MeetingSummary('Summary', [], []);
  }
}
