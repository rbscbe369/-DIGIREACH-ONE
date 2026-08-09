import { Quote } from '../domain/entities/Quote.entity';
import { QuoteLine } from '../domain/entities/QuoteLine.entity';
import { QuoteStatus } from '../domain/value-objects/QuoteStatus.vo';
import { QuoteTotals } from '../domain/value-objects/QuoteTotals.vo';
import { QuoteMetadata } from '../domain/value-objects/QuoteMetadata.vo';
import { InvalidQuoteTransitionError } from '../domain/errors/InvalidQuoteTransitionError';
import { MemoryQuoteRepository } from '../infrastructure/repositories/MemoryQuoteRepository';
import { MemoryQuoteNumberGenerator } from '../infrastructure/generators/MemoryQuoteNumberGenerator';
import { QuoteService } from '../application/services/QuoteService';
import { PricingRuleEvaluator } from '../../pricing/application/services/PricingRuleEvaluator';
import { MemoryPricingRuleSetRepository } from '../../pricing/infrastructure/repositories/MemoryPricingRuleSetRepository';

describe('Quote Aggregate', () => {
  it('should enforce status transitions', () => {
    const meta = new QuoteMetadata('t1', null, 'c1', 'USD', null);
    const quote = new Quote(
      'q1',
      'QT-01',
      QuoteStatus.Draft,
      new Date(),
      null,
      meta,
      new QuoteTotals(0, 0, 0),
      new Date(),
      new Date(),
    );

    // valid
    quote.transitionTo(QuoteStatus.PendingApproval);
    expect(quote.status).toBe(QuoteStatus.PendingApproval);

    // invalid
    expect(() => quote.transitionTo(QuoteStatus.Draft)).toThrow(InvalidQuoteTransitionError);
  });

  it('should create immutable snapshot version on approval', () => {
    const meta = new QuoteMetadata('t1', null, 'c1', 'USD', null);
    const quote = new Quote(
      'q1',
      'QT-01',
      QuoteStatus.Draft,
      new Date(),
      null,
      meta,
      new QuoteTotals(0, 0, 0),
      new Date(),
      new Date(),
    );

    const line = new QuoteLine('l1', 'pv1', 2, 100, 90, 180, 'USD', 'pb1', ['r1']);
    quote.addLine(line);

    quote.transitionTo(QuoteStatus.Approved);

    expect(quote.getVersions().length).toBe(1);
    expect(quote.getVersions()[0]?.lines[0]?.unitPrice).toBe(90);
  });

  it('should calculate totals correctly avoiding floating point errors', () => {
    const meta = new QuoteMetadata('t1', null, 'c1', 'USD', null);
    const quote = new Quote(
      'q1',
      'QT-01',
      QuoteStatus.Draft,
      new Date(),
      null,
      meta,
      new QuoteTotals(0, 0, 0),
      new Date(),
      new Date(),
    );

    // 10.50 * 3 = 31.50
    const line1 = new QuoteLine('l1', 'pv1', 3, 15, 10.5, 31.5, 'USD', 'pb1', []);
    // 5.99 * 2 = 11.98
    const line2 = new QuoteLine('l2', 'pv2', 2, 10, 5.99, 11.98, 'USD', 'pb1', []);

    quote.addLine(line1);
    quote.addLine(line2);

    // 31.50 + 11.98 = 43.48
    expect(quote.currentTotals.grandTotal).toBe(43.48);
  });
});

describe('QuoteService (Integration)', () => {
  it('should create a quote and price a line deterministically', async () => {
    const repo = new MemoryQuoteRepository();
    const gen = new MemoryQuoteNumberGenerator();
    const pricingRepo = new MemoryPricingRuleSetRepository();
    const evaluator = new PricingRuleEvaluator(pricingRepo);

    // dummy uow
    const uow = {
      execute: async (work: unknown) => (work as (tx: unknown) => Promise<unknown>)(null),
    };

    const service = new QuoteService(repo, gen, evaluator, uow);

    const meta = new QuoteMetadata('tenantA', null, 'CUST-1', 'USD', null);
    const quote = await service.createQuote(meta, null);

    expect(quote.quoteNumber).toBe('tenantA-000001');
    expect(quote.status).toBe(QuoteStatus.Draft);

    await service.addLineAndPrice(quote.quoteId, 'pv1', 5, 'pb1', 100);

    const saved = await repo.findById(quote.quoteId);
    expect(saved?.getLines().length).toBe(1);
    // Since no rules exist, unit price = base price = 100
    expect(saved?.getLines()[0]?.unitPrice).toBe(100);
    expect(saved?.getLines()[0]?.lineTotal).toBe(500);
    expect(saved?.currentTotals.grandTotal).toBe(500);
  });
});
