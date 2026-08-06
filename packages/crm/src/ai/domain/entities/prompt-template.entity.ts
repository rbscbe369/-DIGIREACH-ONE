import { PromptVersion } from '../value-objects/prompt-version.vo';
export class PromptTemplate {
  constructor(
    public readonly templateId: string,
    public readonly name: string,
    public readonly rawTemplate: string,
    public version: PromptVersion,
  ) {}
}
