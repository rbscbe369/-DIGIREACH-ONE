import { ContinueConversationDto } from '../dtos/crm-ai.dto';

export class CRMAiValidators {
  static validate(data: unknown) {
    return ContinueConversationDto.parse(data);
  }
}
