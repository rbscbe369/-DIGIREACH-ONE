import { AIRequest } from '../../domain/entities/ai-request.entity';
import { AIResponse } from '../../domain/entities/ai-response.entity';

export interface IAIProvider {
  getProviderId(): string;
  executeRequest(request: AIRequest): Promise<AIResponse>;
}
