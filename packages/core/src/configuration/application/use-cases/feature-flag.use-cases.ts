import { IFeatureFlagRepository } from '../interfaces/i-configuration.repository';
import { FeatureFlag } from '../../domain/entities/feature-flag.entity';

export class EnableFeatureUseCase {
  constructor(private readonly repo: IFeatureFlagRepository) {}
  async execute(flag: FeatureFlag): Promise<void> {
    await this.repo.save(flag);
  }
}
