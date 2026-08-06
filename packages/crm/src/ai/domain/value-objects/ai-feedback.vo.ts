export class AIFeedback {
  constructor(
    public readonly userRating: number,
    public readonly userComments: string | null,
  ) {}
}
