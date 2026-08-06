import { NotificationTemplate } from '../../domain/entities/notification-template.entity';

export interface ITemplateRenderer {
  render(template: NotificationTemplate, payload: Record<string, unknown>): Promise<string>;
}
