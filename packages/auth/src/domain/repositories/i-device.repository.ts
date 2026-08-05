import { Device } from '../entities/device.entity';
import { DeviceId, UserId } from '../value-objects/id.vo';

export interface IDeviceRepository {
  findById(id: DeviceId): Promise<Device | null>;
  findByUser(userId: UserId): Promise<Device[]>;
  findByFingerprint(userId: UserId, fingerprint: string): Promise<Device | null>;
  save(device: Device): Promise<void>;
}