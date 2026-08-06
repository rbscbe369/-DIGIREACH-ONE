import { SearchRanking } from '../value-objects/search-ranking.vo';

export class SearchRankingPolicy {
  static getDefaultRanking(): SearchRanking {
    return new SearchRanking(2.0, 1.5, 1.0, 1.2, 1.1, 1.0);
  }
}
