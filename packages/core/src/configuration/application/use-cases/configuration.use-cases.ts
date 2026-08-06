import { IConfigurationRepository } from '../interfaces/i-configuration.repository';
import { Configuration } from '../../domain/entities/configuration.entity';

export class CreateConfigurationUseCase {
  constructor(private readonly repo: IConfigurationRepository) {}
  async execute(config: Configuration): Promise<void> {
    await this.repo.save(config);
  }
}

export class DeleteConfigurationUseCase {
  constructor(private readonly repo: IConfigurationRepository) {}
  async execute(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
