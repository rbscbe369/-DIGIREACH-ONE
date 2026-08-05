import { IPrismaClient } from '../persistence/prisma/interfaces';
import { IUnitOfWork } from '../../application/interfaces/i-unit-of-work.interface';

export class PrismaUnitOfWork implements IUnitOfWork {
  constructor(private readonly prisma: IPrismaClient) {}

  async start(): Promise<void> {
    // Real implementation would use Prisma interactive transactions
    console.log('[PrismaUnitOfWork] Transaction started');
  }

  async commit(): Promise<void> {
    console.log('[PrismaUnitOfWork] Transaction committed');
  }

  async rollback(): Promise<void> {
    console.log('[PrismaUnitOfWork] Transaction rolled back');
  }
}