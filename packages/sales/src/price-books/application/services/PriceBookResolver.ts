import { PriceBook } from '../../domain/entities/PriceBook.entity';
import { IPriceBookRepository } from '../interfaces/IPriceBookRepository';

export interface PriceBookResolutionContext {
  tenantId: string | null;
  organizationId: string | null;
  channel: string | null;
  regionId: string | null;
  currency: string;
  effectiveDate: Date;
}

export class PriceBookResolver {
  constructor(private readonly repository: IPriceBookRepository) {}

  public async resolveApplicablePriceBooks(
    context: PriceBookResolutionContext,
  ): Promise<PriceBook[]> {
    const allBooks = await this.repository.findAll();

    const candidates = allBooks.filter((pb) => {
      if (!pb.isEffectiveAt(context.effectiveDate)) return false;
      if (pb.currency !== context.currency) return false;
      if (pb.metadata.tenantId && pb.metadata.tenantId !== context.tenantId) return false;
      if (pb.metadata.organizationId && pb.metadata.organizationId !== context.organizationId)
        return false;
      if (pb.metadata.channel && pb.metadata.channel !== context.channel) return false;
      if (pb.metadata.regionId && pb.metadata.regionId !== context.regionId) return false;
      return true;
    });

    // Deterministic sorting: priority descending, then newer validFrom, then priceBookId
    candidates.sort((a, b) => {
      if (a.metadata.priority !== b.metadata.priority) {
        return b.metadata.priority - a.metadata.priority; // higher priority first
      }

      const aTime = a.validFrom ? a.validFrom.getTime() : 0;
      const bTime = b.validFrom ? b.validFrom.getTime() : 0;
      if (aTime !== bTime) {
        return bTime - aTime; // newer first
      }

      return a.priceBookId.localeCompare(b.priceBookId);
    });

    return candidates;
  }
}
