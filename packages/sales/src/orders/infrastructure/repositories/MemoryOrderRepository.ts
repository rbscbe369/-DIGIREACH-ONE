import { IOrderRepository } from '../../application/interfaces/IOrderRepository';
import { Order } from '../../domain/entities/Order.entity';

export class MemoryOrderRepository implements IOrderRepository {
  private store: Map<string, Order> = new Map();

  public async save(order: Order): Promise<void> {
    this.store.set(order.orderId, order);
  }

  public async findById(id: string): Promise<Order | null> {
    return this.store.get(id) || null;
  }
}
