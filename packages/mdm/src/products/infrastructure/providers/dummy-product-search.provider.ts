import { IProductSearchProvider } from '../../application/interfaces/i-product-search.provider';
export class DummyProductSearchProvider implements IProductSearchProvider {
  async search(_query: string): Promise<string[]> {
    return [];
  }
}
