import { ConfigurationCategory } from '../value-objects/configuration-category.vo';
import { ConfigurationValue } from '../value-objects/configuration-key-value.vo';

export class ConfigurationPolicy {
  static validate(category: ConfigurationCategory, value: ConfigurationValue): void {
    if (category === ConfigurationCategory.AI) {
      if (value.type !== 'json') {
        throw new Error(
          'AI Configurations must be JSON objects containing AI Provider, LLM Selection, and Prompt Policies.',
        );
      }
    }
  }
}
