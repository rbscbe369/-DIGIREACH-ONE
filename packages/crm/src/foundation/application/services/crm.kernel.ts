import { CRMModuleRegistryService } from './crm-module-registry.service';
import { CRMConfigurationService } from './crm-configuration.service';
import { CRMModule } from '../../domain/value-objects/crm-module.vo';

export class CRMKernel {
  private static instance: CRMKernel;

  private constructor(
    public readonly registry: CRMModuleRegistryService,
    public readonly config: CRMConfigurationService,
  ) {}

  public static getInstance(
    registry: CRMModuleRegistryService,
    config: CRMConfigurationService,
  ): CRMKernel {
    if (!CRMKernel.instance) {
      CRMKernel.instance = new CRMKernel(registry, config);
    }
    return CRMKernel.instance;
  }

  public registerModule(module: CRMModule): void {
    this.registry.register(module);
  }

  public getModule(moduleId: string): CRMModule | null {
    return this.registry.getModule(moduleId);
  }
}
