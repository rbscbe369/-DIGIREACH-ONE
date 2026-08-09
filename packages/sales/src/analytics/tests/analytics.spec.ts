import { AnalyticsEventProcessor } from '../application/services/AnalyticsEventProcessor';
import { SalesAnalyticsQueryService } from '../application/services/SalesAnalyticsQueryService';
import { MemorySalesAnalyticsRepository } from '../infrastructure/repositories/MemorySalesAnalyticsRepository';
import * as fs from 'fs';
import * as path from 'path';

describe('Sales Analytics Engine', () => {
  let repository: MemorySalesAnalyticsRepository;
  let processor: AnalyticsEventProcessor;
  let queryService: SalesAnalyticsQueryService;

  beforeEach(() => {
    repository = new MemorySalesAnalyticsRepository();
    processor = new AnalyticsEventProcessor(repository);
    queryService = new SalesAnalyticsQueryService(repository);
  });

  const generateMockEvent = (eventId: string, type: string, payload: unknown) => ({
    eventId,
    eventType: type,
    payload: JSON.stringify(payload),
    occurredAt: new Date(Date.UTC(2026, 0, 15)).toISOString(),
  });

  describe('Event Projection & KPI Calculation', () => {
    it('should aggregate Quote KPIs correctly (QuoteCreated)', async () => {
      await processor.processEvent(
        generateMockEvent('e1', 'QuoteCreated', {
          tenantId: 't1',
          currency: 'USD',
          grandTotal: 1500,
        }),
      );
      await processor.processEvent(
        generateMockEvent('e2', 'QuoteCreated', {
          tenantId: 't1',
          currency: 'USD',
          grandTotal: 500,
        }),
      );

      const snaps = await queryService.getTenantSnapshots('t1');
      expect(snaps.length).toBe(1);
      expect(snaps[0]!.kpis.quoteCount).toBe(2);
      expect(snaps[0]!.kpis.quoteValue.minorUnits).toBe(200000);
    });

    it('should calculate Quote Status KPIs', async () => {
      await processor.processEvent(
        generateMockEvent('e1', 'QuoteStatusChanged', {
          tenantId: 't1',
          currency: 'USD',
          newStatus: 'Accepted',
        }),
      );
      await processor.processEvent(
        generateMockEvent('e2', 'QuoteStatusChanged', {
          tenantId: 't1',
          currency: 'USD',
          newStatus: 'Rejected',
        }),
      );

      const snaps = await queryService.getTenantSnapshots('t1');
      expect(snaps[0]!.kpis.acceptedQuoteCount).toBe(1);
      expect(snaps[0]!.kpis.rejectedQuoteCount).toBe(1);
    });

    it('should calculate Order KPIs and conversion', async () => {
      await processor.processEvent(
        generateMockEvent('e3', 'OrderCreated', {
          tenantId: 't1',
          currency: 'USD',
          grandTotalMinorUnits: 150000,
          sourceQuoteId: 'q1',
        }),
      );

      const snaps = await queryService.getTenantSnapshots('t1');
      expect(snaps[0]!.kpis.orderCount).toBe(1);
      expect(snaps[0]!.kpis.orderValue.minorUnits).toBe(150000);
      expect(snaps[0]!.kpis.convertedToOrderCount).toBe(1);
    });

    it('should calculate Contract KPIs for one-time and recurring value', async () => {
      await processor.processEvent(
        generateMockEvent('e4', 'ContractActivated', {
          tenantId: 't1',
          currency: 'USD',
          totalOneTimeValueMinorUnits: 50000,
          totalRecurringValueMinorUnits: 10000,
        }),
      );

      const snaps = await queryService.getTenantSnapshots('t1');
      expect(snaps[0]!.kpis.activatedContractCount).toBe(1);
      expect(snaps[0]!.kpis.contractOneTimeValue.minorUnits).toBe(50000);
      expect(snaps[0]!.kpis.contractRecurringValue.minorUnits).toBe(10000);
    });
  });

  describe('Idempotency', () => {
    it('should protect against duplicate event processing', async () => {
      const event = generateMockEvent('e-idem', 'QuoteCreated', {
        tenantId: 't1',
        currency: 'USD',
        grandTotal: 1000,
      });

      await processor.processEvent(event);
      await processor.processEvent(event); // Re-delivery
      await processor.processEvent(event); // Re-delivery

      const snaps = await queryService.getTenantSnapshots('t1');
      expect(snaps[0]!.kpis.quoteCount).toBe(1); // Still 1
      expect(snaps[0]!.kpis.quoteValue.minorUnits).toBe(100000);
    });

    it('should be resilient to out-of-order event delivery', async () => {
      // Send QuoteStatusChanged before QuoteCreated
      await processor.processEvent(
        generateMockEvent('e-stat', 'QuoteStatusChanged', {
          tenantId: 't2',
          currency: 'USD',
          newStatus: 'Accepted',
        }),
      );
      await processor.processEvent(
        generateMockEvent('e-cre', 'QuoteCreated', {
          tenantId: 't2',
          currency: 'USD',
          grandTotal: 500,
        }),
      );

      const snaps = await queryService.getTenantSnapshots('t2');
      expect(snaps[0]!.kpis.quoteCount).toBe(1);
      expect(snaps[0]!.kpis.acceptedQuoteCount).toBe(1);
      expect(snaps[0]!.kpis.quoteValue.minorUnits).toBe(50000);
    });
  });

  describe('Tenant & Currency Isolation', () => {
    it('should isolate by tenant and currency', async () => {
      await processor.processEvent(
        generateMockEvent('e1', 'QuoteCreated', {
          tenantId: 'tenant-a',
          currency: 'USD',
          grandTotal: 10,
        }),
      );
      await processor.processEvent(
        generateMockEvent('e2', 'QuoteCreated', {
          tenantId: 'tenant-a',
          currency: 'EUR',
          grandTotal: 20,
        }),
      );
      await processor.processEvent(
        generateMockEvent('e3', 'QuoteCreated', {
          tenantId: 'tenant-b',
          currency: 'USD',
          grandTotal: 30,
        }),
      );

      const snapsA = await queryService.getTenantSnapshots('tenant-a');
      expect(snapsA.length).toBe(2);
      expect(snapsA.find((s) => s.dimension.currency === 'USD')!.kpis.quoteValue.minorUnits).toBe(
        1000,
      );
      expect(snapsA.find((s) => s.dimension.currency === 'EUR')!.kpis.quoteValue.minorUnits).toBe(
        2000,
      );

      const snapsB = await queryService.getTenantSnapshots('tenant-b');
      expect(snapsB.length).toBe(1);
      expect(snapsB[0]!.kpis.quoteValue.minorUnits).toBe(3000);
    });
  });

  describe('Architecture Boundary Verification', () => {
    it('should not import Fastify, Zod, MDM, Pricing, Quotes, Orders, or Contracts into Domain', () => {
      const domainDir = path.join(__dirname, '../domain');
      const verifyNoImports = (dir: string) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const fullPath = path.join(dir, file);
          if (fs.statSync(fullPath).isDirectory()) {
            verifyNoImports(fullPath);
          } else if (fullPath.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            expect(content).not.toMatch(/from 'fastify'/);
            expect(content).not.toMatch(/from 'zod'/);
            expect(content).not.toMatch(/from '.*\/quotes\//);
            expect(content).not.toMatch(/from '.*\/orders\//);
            expect(content).not.toMatch(/from '.*\/contracts\//);
            expect(content).not.toMatch(/from '.*\/price-books\//);
            expect(content).not.toMatch(/from '.*\/mdm\//);
          }
        }
      };
      verifyNoImports(domainDir);
    });
  });
});
