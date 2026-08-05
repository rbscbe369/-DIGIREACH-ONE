import { BaseRepository } from './base.repository';
import { IPrismaClient, DeviceModel } from '../persistence/prisma/interfaces';
import { IDeviceRepository } from '../../domain/repositories/i-device.repository';
import { Device } from '../../domain/entities/device.entity';
import { DeviceId, UserId } from '../../domain/value-objects/id.vo';
import { DeviceMapper } from '../persistence/mappers/device.mapper';

export class DeviceRepository extends BaseRepository<Device, DeviceId> implements IDeviceRepository {
  constructor(prisma: IPrismaClient) {
    super(prisma);
  }


  async findById(id: DeviceId): Promise<Device | null> {
    const data = await this.prisma.device.findUnique({ where: { id: id.value } });
    return data ? DeviceMapper.toDomain(data) : null;
  }

  async findByUser(userId: UserId): Promise<Device[]> {
    const data = await this.prisma.device.findMany({ where: { userId: userId.value } });
    return data.map((d: DeviceModel) => DeviceMapper.toDomain(d));
  }

  async findByFingerprint(userId: UserId, fingerprint: string): Promise<Device | null> {
    const data = await this.prisma.device.findFirst({
      where: { userId: userId.value, fingerprint }
    });
    return data ? DeviceMapper.toDomain(data) : null;
  }

  async save(device: Device): Promise<void> {
    const data = DeviceMapper.toPersistence(device);
    await this.prisma.device.upsert({
      where: { id: data.id },
      update: data,
      create: data
    });
  }
}