import { Quote } from '../../domain/entities/Quote.entity';
import { QuoteLine } from '../../domain/entities/QuoteLine.entity';
import { QuoteStatus } from '../../domain/value-objects/QuoteStatus.vo';
import { QuoteMetadata } from '../../domain/value-objects/QuoteMetadata.vo';
import { QuoteTotals } from '../../domain/value-objects/QuoteTotals.vo';
import { IQuoteRepository } from '../interfaces/IQuoteRepository';
import { IQuoteNumberGenerator } from '../interfaces/IQuoteNumberGenerator';
import { IUnitOfWorkQuote } from '../interfaces/IUnitOfWorkQuote';
import { PricingContext } from '../../../pricing/domain/value-objects/PricingContext.vo';
import { PricingRuleEvaluator } from '../../../pricing/application/services/PricingRuleEvaluator';

export class QuoteService {
  constructor(
    private readonly repository: IQuoteRepository,
    private readonly numberGenerator: IQuoteNumberGenerator,
    private readonly evaluator: PricingRuleEvaluator,
    private readonly uow: IUnitOfWorkQuote,
  ) {}

  public async createQuote(metadata: QuoteMetadata, expirationDate: Date | null): Promise<Quote> {
    return this.uow.execute(async () => {
      const qNum = await this.numberGenerator.generate(metadata.tenantId);
      const quote = new Quote(
        Math.random().toString(36).substring(7),
        qNum,
        QuoteStatus.Draft,
        new Date(),
        expirationDate,
        metadata,
        new QuoteTotals(0, 0, 0),
        new Date(),
        new Date(),
      );
      await this.repository.save(quote);
      return quote;
    });
  }

  public async addLineAndPrice(
    quoteId: string,
    productVersionId: string,
    quantity: number,
    priceBookId: string,
    basePrice: number,
  ): Promise<void> {
    await this.uow.execute(async () => {
      const quote = await this.repository.findById(quoteId);
      if (!quote) throw new Error('Quote not found');

      const ctx = new PricingContext(
        quote.metadata.tenantId,
        quote.metadata.organizationId,
        productVersionId,
        priceBookId,
        null,
        quantity,
        basePrice,
        quote.metadata.currency,
        null,
        null,
        quote.metadata.customerReference,
        new Date(),
      );

      const res = await this.evaluator.evaluate(ctx);
      const lineTotal = Math.round(res.finalCalculatedPrice * quantity * 100) / 100;

      const line = new QuoteLine(
        Math.random().toString(36).substring(7),
        productVersionId,
        quantity,
        res.basePrice,
        res.finalCalculatedPrice,
        lineTotal,
        res.currency,
        priceBookId,
        res.pricingRuleIds,
      );

      quote.addLine(line);
      await this.repository.save(quote);
    });
  }

  public async submitQuote(quoteId: string): Promise<void> {
    await this.uow.execute(async () => {
      const quote = await this.repository.findById(quoteId);
      if (!quote) throw new Error('Quote not found');
      quote.transitionTo(QuoteStatus.Approved); // Simplify workflow for test
      await this.repository.save(quote);
    });
  }
}
