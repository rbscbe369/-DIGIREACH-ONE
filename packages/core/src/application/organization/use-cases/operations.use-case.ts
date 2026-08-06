// Placeholders for extended operations
export class ExtendedOperationsUseCase {
  async archive(_nodeId: string): Promise<void> {}
  async restore(_nodeId: string): Promise<void> {}
  async merge(_sourceNodeId: string, _targetNodeId: string): Promise<void> {}
  async split(_nodeId: string): Promise<void> {}
}
