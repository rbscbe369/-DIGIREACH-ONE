export class PipelineSLA {
  constructor(
    public readonly expectedDurationHours: number,
    public readonly minDurationHours: number | null,
    public readonly maxDurationHours: number | null,
  ) {}
}
