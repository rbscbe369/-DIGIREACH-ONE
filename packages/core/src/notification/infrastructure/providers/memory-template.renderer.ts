import { ITemplateRenderer } from '../../application/interfaces/i-template-renderer';
import { NotificationTemplate } from '../../domain/entities/notification-template.entity';

export class MemoryTemplateRenderer implements ITemplateRenderer {
  async render(template: NotificationTemplate, payload: Record<string, unknown>): Promise<string> {
    let rendered = template.rawBody;
    for (const [key, value] of Object.entries(payload)) {
      rendered = rendered.replace(new RegExp(`{{${key}}}`, 'g'), String(value));
    }
    return rendered;
  }
}
