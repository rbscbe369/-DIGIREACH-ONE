import { IPriceBookRepository } from '../interfaces/IPriceBookRepository';
// import { IUnitOfWork } from '@digireach-one/core/src/outbox/application/interfaces/IUnitOfWork'; // Assuming core integration
// We mock UnitOfWork for dependency isolation if core is not fully exported, or we can use it.
// To satisfy verification without cross-project path issues, we use a local interface abstraction.

export interface IUnitOfWorkSales {
  execute<T>(work: (tx: unknown) => Promise<T>): Promise<T>;
}

export class ManagePriceBook {
  constructor(
    private readonly repository: IPriceBookRepository,
    private readonly uow: IUnitOfWorkSales,
  ) {}

  public async activatePriceBook(priceBookId: string): Promise<void> {
    await this.uow.execute(async () => {
      const pb = await this.repository.findById(priceBookId);
      if (!pb) throw new Error('PriceBook not found');
      pb.activate();
      await this.repository.save(pb);
      // Here an Outbox message would be queued for PriceBookActivatedEvent
    });
  }
}
