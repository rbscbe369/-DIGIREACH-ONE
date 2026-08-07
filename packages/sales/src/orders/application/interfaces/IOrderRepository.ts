import { Order } from '../../domain/entities/Order.entity';

export interface IOrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
}
