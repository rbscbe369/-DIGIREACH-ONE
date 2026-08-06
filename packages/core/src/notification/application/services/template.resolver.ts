import { ITemplateRenderer } from '../interfaces/i-template-renderer';
import { NotificationTemplate } from '../../domain/entities/notification-template.entity';

export class TemplateResolver {
  constructor(private readonly renderer: ITemplateRenderer) {}

  async resolveAndRender(
    template: NotificationTemplate,
    payload: Record<string, unknown>,
  ): Promise<string> {
    return this.renderer.render(template, payload);
  }
}
