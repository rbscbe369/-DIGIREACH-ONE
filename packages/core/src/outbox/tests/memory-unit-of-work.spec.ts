import { MemoryUnitOfWork } from '../infrastructure/transactions/MemoryUnitOfWork';
import { MemoryTransactionContext } from '../infrastructure/transactions/MemoryTransactionContext';

describe('MemoryUnitOfWork', () => {
  it('should commit successfully', async () => {
    const uow = new MemoryUnitOfWork();
    let executed = false;
    await uow.execute(async () => {
      executed = true;
    });
    expect(executed).toBe(true);
  });

  it('should rollback on error', async () => {
    const uow = new MemoryUnitOfWork();
    let txRef: MemoryTransactionContext | null = null;
    await expect(
      uow.execute(async (tx) => {
        txRef = tx as MemoryTransactionContext;
        throw new Error('Test error');
      }),
    ).rejects.toThrow('Test error');

    const rolledBack = (txRef as MemoryTransactionContext | null)?.isRolledBack;
    const committed = (txRef as MemoryTransactionContext | null)?.isCommitted;
    expect(rolledBack).toBe(true);
    expect(committed).toBe(false);
  });
});
