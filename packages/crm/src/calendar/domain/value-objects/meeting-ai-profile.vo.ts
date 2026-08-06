export class MeetingAIProfile {
  constructor(
    public readonly meetingSummary: string | null,
    public readonly actionItems: string[],
    public readonly decisionSummary: string | null,
    public readonly attendancePrediction: number | null,
    public readonly suggestedParticipants: string[],
    public readonly conflictDetection: boolean,
    public readonly scheduleOptimization: string | null,
    public readonly meetingEffectiveness: number | null,
    public readonly followUpRecommendation: string | null,
    public readonly nextBestMeetingTime: Date | null,
  ) {}
}
