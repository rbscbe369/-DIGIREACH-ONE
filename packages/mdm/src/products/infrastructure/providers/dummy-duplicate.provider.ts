import { IProductDuplicateDetector } from '../../application/interfaces/i-product-duplicate.detector';
export class DummyDuplicateProvider implements IProductDuplicateDetector {
  async isDuplicate(_sku: string): Promise<boolean> {
    return false;
  }
}
