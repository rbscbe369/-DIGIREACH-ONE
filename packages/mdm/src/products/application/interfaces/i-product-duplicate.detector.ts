export interface IProductDuplicateDetector {
  isDuplicate(sku: string): Promise<boolean>;
}
