import { CRMModule } from '../../domain/value-objects/crm-module.vo';

export class CRMModuleRegistryService {
  private modules = new Map<string, CRMModule>();

  constructor() {
    this.seedPlaceholders();
  }

  public register(module: CRMModule): void {
    this.modules.set(module.moduleId, module);
  }

  public getModule(moduleId: string): CRMModule | null {
    return this.modules.get(moduleId) || null;
  }

  public getAllModules(): CRMModule[] {
    return Array.from(this.modules.values());
  }

  private seedPlaceholders(): void {
    const placeholders = [
      'leads',
      'contacts',
      'accounts',
      'opportunities',
      'pipeline',
      'activities',
      'calendar',
      'meetings',
      'tasks',
      'notes',
      'attachments',
      'products',
      'pricebooks',
      'quotes',
      'orders',
      'customer360',
      'ai-assistant',
    ];

    placeholders.forEach((p) => {
      this.register(
        new CRMModule(
          p,
          p.charAt(0).toUpperCase() + p.slice(1),
          '1.0.0',
          ['foundation'],
          [],
          {},
          'INACTIVE',
          'INTERNAL',
        ),
      );
    });
  }
}
