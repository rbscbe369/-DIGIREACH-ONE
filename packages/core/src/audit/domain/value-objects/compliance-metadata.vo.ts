export class ComplianceMetadata {
  constructor(
    public readonly isGdpr: boolean = false,
    public readonly isHipaa: boolean = false,
    public readonly isSoc2: boolean = false,
    public readonly isIso27001: boolean = false,
    public readonly isPciDss: boolean = false,
    public readonly dataClassification:
      'PUBLIC' | 'INTERNAL' | 'CONFIDENTIAL' | 'RESTRICTED' = 'INTERNAL',
  ) {}
}
