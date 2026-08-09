import { Contract } from '../domain/entities/Contract.entity';
import { ContractLine } from '../domain/entities/ContractLine.entity';
import { ContractStatus } from '../domain/value-objects/ContractStatus.vo';
import { ContractTerm } from '../domain/value-objects/ContractTerm.vo';
import { RenewalPolicy, RenewalType } from '../domain/value-objects/RenewalPolicy.vo';
import { InvalidContractTransitionError } from '../domain/errors/InvalidContractTransitionError';
import { Money } from '@digireach-one/shared-kernel';
import { MemoryContractRepository } from '../infrastructure/repositories/MemoryContractRepository';
import * as fs from 'fs';
import * as path from 'path';

describe('Contract Engine', () => {
  let contract: Contract;
  const tenantId = 'tenant-1';
  const orgId = 'org-1';

  beforeEach(() => {
    const term = new ContractTerm(new Date('2026-01-01'), new Date('2026-12-31'), 30);
    const renewal = new RenewalPolicy(RenewalType.AutoRenew, 12);
    contract = new Contract(
      'ctr-1',
      'CTR-001',
      tenantId,
      orgId,
      ContractStatus.Draft,
      term,
      renewal,
      0,
      'ord-123',
      'qte-456',
      [],
      new Date(),
      new Date(),
    );
  });

  describe('Contract Lifecycle (C, D, E, F, G, H, I)', () => {
    it('Draft -> PendingApproval -> Approved -> Active', () => {
      contract.transitionTo(ContractStatus.PendingApproval);
      contract.transitionTo(ContractStatus.Approved);
      contract.transitionTo(ContractStatus.Active);
      expect(contract.status).toBe(ContractStatus.Active);
    });

    it('Draft -> Cancelled', () => {
      contract.transitionTo(ContractStatus.Cancelled);
      expect(contract.status).toBe(ContractStatus.Cancelled);
    });

    it('Active -> Suspended -> Active', () => {
      contract.transitionTo(ContractStatus.PendingApproval);
      contract.transitionTo(ContractStatus.Approved);
      contract.transitionTo(ContractStatus.Active);
      contract.transitionTo(ContractStatus.Suspended);
      expect(contract.status).toBe(ContractStatus.Suspended);
      contract.transitionTo(ContractStatus.Active);
      expect(contract.status).toBe(ContractStatus.Active);
    });

    it('Active -> Expired', () => {
      contract.transitionTo(ContractStatus.PendingApproval);
      contract.transitionTo(ContractStatus.Approved);
      contract.transitionTo(ContractStatus.Active);
      contract.transitionTo(ContractStatus.Expired);
      expect(contract.status).toBe(ContractStatus.Expired);
    });

    it('Active -> Terminated', () => {
      contract.transitionTo(ContractStatus.PendingApproval);
      contract.transitionTo(ContractStatus.Approved);
      contract.transitionTo(ContractStatus.Active);
      contract.transitionTo(ContractStatus.Terminated);
      expect(contract.status).toBe(ContractStatus.Terminated);
    });

    it('should reject invalid transitions', () => {
      expect(() => contract.transitionTo(ContractStatus.Active)).toThrow(
        InvalidContractTransitionError,
      );
      expect(() => contract.transitionTo(ContractStatus.Expired)).toThrow(
        InvalidContractTransitionError,
      );
    });
  });

  describe('Contract Versioning (K, L)', () => {
    it('should create an immutable snapshot version preserving lines and terms', () => {
      const line = new ContractLine(
        'line-1',
        'prod-v1',
        10,
        Money.fromMinorUnits(5000, 'USD'),
        true,
        'Monthly',
      );
      contract.addLine(line);

      contract.createSnapshotVersion();
      expect(contract.currentVersion).toBe(1);

      const v1 = contract.getVersion(1);
      expect(v1).toBeDefined();
      expect(v1!.lines.length).toBe(1);
      expect(v1!.lines[0]!.unitValue.minorUnits).toBe(5000);
      expect(v1!.originatingOrderId).toBe('ord-123');
      expect(v1!.originatingQuoteId).toBe('qte-456');

      const events = contract.clearPendingEvents();
      expect(events.find((e) => e.eventType === 'ContractVersionCreated')).toBeDefined();
    });
  });

  describe('Money & Commercial Value (M, N, O, P, Q)', () => {
    it('should calculate recurring and one-time totals properly', () => {
      const line1 = new ContractLine(
        'line-1',
        'prod-v1',
        2,
        Money.fromMinorUnits(5000, 'USD'),
        true,
        'Monthly',
      ); // 100.00
      const line2 = new ContractLine(
        'line-2',
        'prod-v2',
        1,
        Money.fromMinorUnits(15000, 'USD'),
        false,
        'None',
      ); // 150.00

      contract.addLine(line1);
      contract.addLine(line2);

      expect(contract.totals).toBeDefined();
      expect(contract.totals!.totalRecurringValue.minorUnits).toBe(10000);
      expect(contract.totals!.totalOneTimeValue.minorUnits).toBe(15000);
      expect(contract.totals!.recurrencePeriod).toBe('Monthly');
    });

    it('should reject mismatched currencies', () => {
      const line1 = new ContractLine(
        'line-1',
        'prod-v1',
        1,
        Money.fromMinorUnits(5000, 'USD'),
        true,
        'Monthly',
      );
      const line2 = new ContractLine(
        'line-2',
        'prod-v2',
        1,
        Money.fromMinorUnits(5000, 'EUR'),
        true,
        'Monthly',
      );

      contract.addLine(line1);
      expect(() => contract.addLine(line2)).toThrow(
        'All contract lines must have the same currency.',
      );
    });
  });

  describe('Renewal Policy (J, R, S)', () => {
    it('should reject invalid renewal policies', () => {
      expect(() => new RenewalPolicy(RenewalType.AutoRenew, null)).toThrow();
      expect(() => new RenewalPolicy(RenewalType.AutoRenew, -5)).toThrow();
    });

    it('should transition contract to renewed state generating a new version', () => {
      contract.transitionTo(ContractStatus.PendingApproval);
      contract.transitionTo(ContractStatus.Approved);
      contract.transitionTo(ContractStatus.Active);

      expect(contract.currentVersion).toBe(0);
      contract.renew();

      expect(contract.currentVersion).toBe(1);
      const events = contract.clearPendingEvents();
      expect(events.find((e) => e.eventType === 'ContractRenewed')).toBeDefined();
    });
  });

  describe('Tenant Isolation (B)', () => {
    it('should isolate contracts by tenant in repository', async () => {
      const repo = new MemoryContractRepository();
      await repo.save(contract);

      const found = await repo.findById(contract.contractId, tenantId);
      expect(found).toBeDefined();

      const notFound = await repo.findById(contract.contractId, 'other-tenant');
      expect(notFound).toBeNull();
    });
  });

  describe('Architecture Boundary Verification (AA)', () => {
    it('should not import Fastify, Zod, MDM, Pricing, Orders into Domain', () => {
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
            expect(content).not.toMatch(/from '.*\/mdm\/'/);
            expect(content).not.toMatch(/from '.*\/orders\/'/);
            expect(content).not.toMatch(/from '.*\/quotes\/'/);
            expect(content).not.toMatch(/from '.*\/price-books\/'/);
          }
        }
      };
      verifyNoImports(domainDir);
    });
  });
});
