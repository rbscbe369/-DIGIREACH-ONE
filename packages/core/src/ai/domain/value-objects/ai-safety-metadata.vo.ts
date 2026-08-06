export class AISafetyMetadata {
  constructor(
    public readonly safetyScore: number | null = null,
    public readonly moderationResult: string | null = null,
    public readonly piiDetected: boolean = false,
    public readonly promptInjectionDetected: boolean = false,
    public readonly hallucinationRiskScore: number | null = null,
  ) {}
}
