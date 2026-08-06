export class AISafetyMetadata {
  constructor(
    public readonly hallucinationRisk: 'LOW' | 'MEDIUM' | 'HIGH',
    public readonly piiDetected: boolean,
    public readonly missingContext: boolean,
  ) {}
}
