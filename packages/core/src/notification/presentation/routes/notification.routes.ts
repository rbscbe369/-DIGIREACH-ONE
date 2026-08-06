import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { NotificationController } from '../controllers/notification.controller';
import { SendNotificationDto } from '../dtos/notification.dto';
import { SendNotificationUseCase } from '../../application/use-cases/notification.use-cases';
import { MemoryNotificationRepository } from '../../infrastructure/repositories/memory-notification.repository';
import { NotificationDispatcher } from '../../application/services/notification.dispatcher';
import { PreferenceResolver } from '../../application/services/preference.resolver';
import { ChannelResolver } from '../../application/services/channel.resolver';
import { TemplateResolver } from '../../application/services/template.resolver';
import { MemoryTemplateRenderer } from '../../infrastructure/providers/memory-template.renderer';
import {
  DummyEmailProvider,
  DummySMSProvider,
  DummyWhatsAppProvider,
  DummyPushProvider,
  DummyWebhookProvider,
  DummyAuditPublisher,
} from '../../infrastructure/providers/dummy-providers';

export async function notificationRoutes(app: FastifyInstance) {
  const fastify = app.withTypeProvider<ZodTypeProvider>();

  const repo = new MemoryNotificationRepository();
  const dispatcher = new NotificationDispatcher(
    new DummyEmailProvider(),
    new DummySMSProvider(),
    new DummyWhatsAppProvider(),
    new DummyPushProvider(),
    new DummyWebhookProvider(),
  );
  const preferenceResolver = new PreferenceResolver(repo);
  const channelResolver = new ChannelResolver();
  const templateResolver = new TemplateResolver(new MemoryTemplateRenderer());
  const auditPublisher = new DummyAuditPublisher();

  const sendUseCase = new SendNotificationUseCase(
    repo,
    dispatcher,
    preferenceResolver,
    channelResolver,
    templateResolver,
    auditPublisher,
  );

  const controller = new NotificationController(sendUseCase);

  fastify.post('/notifications/send', {
    schema: {
      tags: ['Notification'],
      summary: 'Send a notification',
      body: SendNotificationDto,
    },
    handler: controller.send.bind(controller),
  });
}
