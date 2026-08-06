import { PromptVersion } from './prompt-version.entity';

export class AIPromptTemplate {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly versions: PromptVersion[],
    public readonly activeVersionId: string,
  ) {}
}
