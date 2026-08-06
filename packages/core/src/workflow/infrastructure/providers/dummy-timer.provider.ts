import { ITimerProvider } from '../../application/interfaces/i-timer.provider';

export class DummyTimerProvider implements ITimerProvider {
  async scheduleTimeout(_instanceId: string, _timeoutMs: number): Promise<void> {}
  async scheduleReminder(_instanceId: string, _delayMs: number): Promise<void> {}
  async cancelTimer(_instanceId: string): Promise<void> {}
}
