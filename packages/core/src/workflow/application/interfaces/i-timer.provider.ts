export interface ITimerProvider {
  scheduleTimeout(instanceId: string, timeoutMs: number): Promise<void>;
  scheduleReminder(instanceId: string, delayMs: number): Promise<void>;
  cancelTimer(instanceId: string): Promise<void>;
}
