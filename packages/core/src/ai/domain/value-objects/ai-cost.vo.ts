export class AICost {
  constructor(
    public readonly currency: string,
    public readonly inputCost: number,
    public readonly outputCost: number,
    public readonly totalCost: number,
  ) {}
}
