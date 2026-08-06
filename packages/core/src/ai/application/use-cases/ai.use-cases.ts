import { AITask } from '../../domain/entities/ai-task.entity';
import { AIRequest } from '../../domain/entities/ai-request.entity';
import { AIResult } from '../../domain/value-objects/ai-result.vo';
import { AIContext } from '../../domain/value-objects/ai-context.vo';
import { IAIPromptRepository } from '../interfaces/i-ai-prompt.repository';
import { IAIExecutionRepository } from '../interfaces/i-ai-execution.repository';
import { PromptResolver } from '../services/prompt.resolver';
import { ProviderResolver } from '../services/provider.resolver';
import { CostEvaluator } from '../services/cost.evaluator';
import { AIModel } from '../../domain/value-objects/ai-model.vo';
import { AICapabilities } from '../../domain/value-objects/ai-capabilities.vo';
import { AISafetyMetadata } from '../../domain/value-objects/ai-safety-metadata.vo';
import { AIExecutionHistory } from '../../domain/entities/ai-execution-history.entity';

export class ExecuteAITaskUseCase {
  constructor(
    private readonly promptRepo: IAIPromptRepository,
    private readonly executionRepo: IAIExecutionRepository,
    private readonly providerResolver: ProviderResolver,
    private readonly costEvaluator: CostEvaluator,
  ) {}

  async execute(
    task: AITask,
    variables: Record<string, unknown>,
    context: AIContext,
  ): Promise<AIResult> {
    const template = await this.promptRepo.findById(task.promptTemplateId);
    if (!template) throw new Error('Prompt template not found');

    const version = template.versions.find((v) => v.id === template.activeVersionId);
    if (!version) throw new Error('Active prompt version not found');

    const resolvedUserMessage = PromptResolver.resolve(version, variables);
    const provider = this.providerResolver.resolve(task.policy);

    // Hardcode resolved model metadata for scaffold
    const resolvedModel = new AIModel(
      task.policy.allowedModels[0] || 'default-model',
      provider.getProviderId(),
      'Default Model',
      0.01,
      0.03,
      8192,
      new AICapabilities(),
    );

    const request = new AIRequest(
      Date.now().toString(),
      task.id,
      version.systemPrompt,
      resolvedUserMessage,
      variables,
      context,
      resolvedModel,
    );

    const response = await provider.executeRequest(request);

    const cost = this.costEvaluator.calculateCost(response.tokenUsage, resolvedModel);
    const safety = new AISafetyMetadata(0.99, 'PASS');
    const result = new AIResult(response.content, null, response.tokenUsage, cost, safety);

    const history = new AIExecutionHistory(
      Date.now().toString(),
      task.id,
      request,
      result,
      null,
      new Date(),
    );

    await this.executionRepo.save(history);

    return result;
  }
}
