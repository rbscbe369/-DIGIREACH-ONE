export interface IProductSearchProvider {
  search(query: string): Promise<string[]>;
}
