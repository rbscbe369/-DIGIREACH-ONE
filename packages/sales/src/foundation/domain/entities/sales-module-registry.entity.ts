import { SalesModule } from './sales-module.entity';
export class SalesModuleRegistry {
  private modules = new Map<string, SalesModule>();
  registerModule(module: SalesModule): void {
    this.modules.set(module.moduleId, module);
  }
}
