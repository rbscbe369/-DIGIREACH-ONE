import { ScheduleType } from '../value-objects/schedule-type.vo';
import { ScheduleTrigger } from '../value-objects/schedule-trigger.vo';
import { RetryPolicy } from '../value-objects/retry-policy-type.vo';

export class ScheduleDefinition {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly type: ScheduleType,
    public readonly payloadTemplate: Record<string, unknown>, // the payload to publish
    public readonly trigger: ScheduleTrigger,
    public readonly retryPolicy: RetryPolicy,
    public readonly createdAt: Date,
  ) {}
}
