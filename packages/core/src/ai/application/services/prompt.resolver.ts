import { PromptVersion } from '../../domain/entities/prompt-version.entity';

export class PromptResolver {
  static resolve(version: PromptVersion, variables: Record<string, unknown>): string {
    let resolvedPrompt = version.userPromptTemplate;

    for (const variableName of version.inputVariables) {
      const value = variables[variableName] !== undefined ? String(variables[variableName]) : '';
      resolvedPrompt = resolvedPrompt.replace(new RegExp(`{{${variableName}}}`, 'g'), value);
    }

    return resolvedPrompt;
  }
}
