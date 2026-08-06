import { ScheduleTrigger } from '../../domain/value-objects/schedule-trigger.vo';

export class TriggerEvaluator {
  static isWindowValid(trigger: ScheduleTrigger, executionAttemptTime: Date): boolean {
    if (!trigger.window) return true;

    if (executionAttemptTime < trigger.window.start) return false;

    if (trigger.window.end && executionAttemptTime > trigger.window.end) {
      return false;
    }

    return true;
  }
}
