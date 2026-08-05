import { DeviceModel } from '../prisma/interfaces';
import { Device } from '../../../domain/entities/device.entity';
import { DeviceId, UserId } from '../../../domain/value-objects/id.vo';

export class DeviceMapper {
  static toDomain(raw: DeviceModel): Device {
    return new Device(
      new DeviceId(raw.id),
      new UserId(raw.userId),
      raw.fingerprint,
      raw.isTrusted
    );
  }

  static toPersistence(device: Device): DeviceModel {
    return {
      id: device.id.value,
      userId: device.userId.value,
      fingerprint: device.fingerprint,
      isTrusted: device.isTrusted
    };
  }
}