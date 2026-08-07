import { IProductSearchProvider } from '../interfaces/i-product-search.provider';
export class ProductSearchService {
  constructor(private readonly provider: IProductSearchProvider) {}
  async search(query: string): Promise<string[]> {
    return this.provider.search(query);
  }
}
