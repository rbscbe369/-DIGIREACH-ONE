import { NextBestAction } from '../../domain/value-objects/next-best-action.vo';
export class NextBestActionGenerator {
  generate(_data: unknown): NextBestAction {
    return new NextBestAction('CALL', 'Follow up', 'id');
  }
}
