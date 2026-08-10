export class MemoryProcessedEventTracker {
  private readonly processedIds = new Set<string>();

  public async hasProcessed(eventId: string): Promise<boolean> {
    return this.processedIds.has(eventId);
  }

  public async markProcessed(eventId: string): Promise<void> {
    this.processedIds.add(eventId);
  }
}
