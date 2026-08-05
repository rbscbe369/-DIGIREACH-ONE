import { IPrismaClient } from '../persistence/prisma/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export abstract class BaseRepository<TEntity, TId> {
  constructor(protected readonly prisma: IPrismaClient) {}
}