import { IAIProvider } from '../../application/interfaces/i-ai-provider';
import { AIRequest } from '../../domain/entities/ai-request.entity';
import { AIResponse } from '../../domain/entities/ai-response.entity';
import { AITokenUsage } from '../../domain/value-objects/ai-token-usage.vo';

export class DummyAIProvider implements IAIProvider {
  getProviderId(): string {
    return 'dummy-ai';
  }

  async executeRequest(request: AIRequest): Promise<AIResponse> {
    const inputTokens = request.userMessage.length;
    const outputTokens = 150;

    const usage = new AITokenUsage(inputTokens, outputTokens, 0, 0, inputTokens + outputTokens);

    return new AIResponse(
      `res-${Date.now()}`,
      request.id,
      'This is a dummy AI response. Provider independence validated.',
      usage,
      450,
      'stop',
    );
  }
}
