import { PriceBook } from '../domain/entities/PriceBook.entity';
import { PriceBookEntry } from '../domain/entities/PriceBookEntry.entity';
import { PriceBookStatus } from '../domain/value-objects/PriceBookStatus.vo';
import { PriceBookType } from '../domain/value-objects/PriceBookType.vo';
import { PriceBookMetadata } from '../domain/value-objects/PriceBookMetadata.vo';
import { ProductVersionReference } from '../domain/value-objects/ProductVersionReference.vo';
import { MemoryPriceBookRepository } from '../infrastructure/repositories/MemoryPriceBookRepository';
import { PriceBookResolver } from '../application/services/PriceBookResolver';

describe('PriceBook Aggregate', () => {
  it('should manage its own entries', () => {
    const meta = new PriceBookMetadata(null, null, null, null, 1);
    const pb = new PriceBook(
      'pb1',
      'Test',
      PriceBookType.Standard,
      'USD',
      PriceBookStatus.Draft,
      null,
      null,
      meta,
      1,
    );

    const entry = new PriceBookEntry(
      'e1',
      new ProductVersionReference('pv1'),
      100,
      'USD',
      null,
      true,
      null,
      null,
      null,
      null,
    );
    pb.addEntry(entry);

    expect(pb.getEntries().length).toBe(1);
    expect(pb.getEntries()[0]?.entryId).toBe('e1');
  });

  it('should not allow entry addition if archived', () => {
    const meta = new PriceBookMetadata(null, null, null, null, 1);
    const pb = new PriceBook(
      'pb1',
      'Test',
      PriceBookType.Standard,
      'USD',
      PriceBookStatus.Archived,
      null,
      null,
      meta,
      1,
    );

    const entry = new PriceBookEntry(
      'e1',
      new ProductVersionReference('pv1'),
      100,
      'USD',
      null,
      true,
      null,
      null,
      null,
      null,
    );
    expect(() => pb.addEntry(entry)).toThrow('Cannot modify archived Price Book');
  });
});

describe('PriceBookResolver', () => {
  let repo: MemoryPriceBookRepository;
  let resolver: PriceBookResolver;

  beforeEach(() => {
    repo = new MemoryPriceBookRepository();
    resolver = new PriceBookResolver(repo);
  });

  it('should deterministically resolve price books by priority and effective date', async () => {
    const now = new Date('2025-01-01');
    const earlier = new Date('2024-01-01');

    // Lower priority
    const meta1 = new PriceBookMetadata('tenantA', null, null, null, 10);
    const pb1 = new PriceBook(
      'pb1',
      'A',
      PriceBookType.Standard,
      'USD',
      PriceBookStatus.Active,
      earlier,
      null,
      meta1,
      1,
    );

    // Higher priority
    const meta2 = new PriceBookMetadata('tenantA', null, null, null, 100);
    const pb2 = new PriceBook(
      'pb2',
      'B',
      PriceBookType.Standard,
      'USD',
      PriceBookStatus.Active,
      earlier,
      null,
      meta2,
      1,
    );

    // Same priority as pb2, but newer effective date
    const meta3 = new PriceBookMetadata('tenantA', null, null, null, 100);
    const pb3 = new PriceBook(
      'pb3',
      'C',
      PriceBookType.Standard,
      'USD',
      PriceBookStatus.Active,
      now,
      null,
      meta3,
      1,
    );

    await repo.save(pb1);
    await repo.save(pb2);
    await repo.save(pb3);

    const resolved = await resolver.resolveApplicablePriceBooks({
      tenantId: 'tenantA',
      organizationId: null,
      channel: null,
      regionId: null,
      currency: 'USD',
      effectiveDate: new Date('2025-06-01'),
    });

    expect(resolved.length).toBe(3);
    // pb3 should be first (priority 100, newer date)
    expect(resolved[0]?.priceBookId).toBe('pb3');
    // pb2 second (priority 100, older date)
    expect(resolved[1]?.priceBookId).toBe('pb2');
    // pb1 third (priority 10)
    expect(resolved[2]?.priceBookId).toBe('pb1');
  });
});
