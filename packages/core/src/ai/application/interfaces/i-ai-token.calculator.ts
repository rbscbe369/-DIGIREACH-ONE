export interface IAITokenCalculator {
  estimateTokens(text: string): number;
}
