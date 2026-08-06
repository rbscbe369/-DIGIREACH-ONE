import { ExecutiveBriefing } from '../../domain/value-objects/executive-briefing.vo';
export class ExecutiveBriefingGenerator {
  generate(_data: unknown): ExecutiveBriefing {
    return new ExecutiveBriefing('Executive Summary', []);
  }
}
