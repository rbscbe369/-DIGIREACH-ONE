export class AICapabilities {
  constructor(
    public readonly supportsEmbeddings: boolean = false,
    public readonly supportsFunctionCalling: boolean = false,
    public readonly supportsStructuredOutput: boolean = false,
    public readonly supportsToolCalling: boolean = false,
    public readonly supportsVision: boolean = false,
    public readonly supportsSpeech: boolean = false,
    public readonly supportsImageGeneration: boolean = false,
    public readonly supportsVideoGeneration: boolean = false,
    public readonly supportsReasoning: boolean = false,
    public readonly supportsAgents: boolean = false,
  ) {}
}
