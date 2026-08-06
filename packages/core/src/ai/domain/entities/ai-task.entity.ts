import { AIPolicy } from '../value-objects/ai-policy.vo';

export class AITask {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly promptTemplateId: string,
    public readonly policy: AIPolicy,
  ) {}
}
