export interface ContextPolicy {
  validate(context: import('../entities/business-context.entity').BusinessContext): boolean;
}

export class DefaultContextPolicy implements ContextPolicy {
  validate(): boolean {
    return true; // Placeholder for future policy validation rules
  }
}
