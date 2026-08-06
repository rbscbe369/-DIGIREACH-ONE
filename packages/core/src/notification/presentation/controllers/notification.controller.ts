import { FastifyRequest, FastifyReply } from 'fastify';
import { SendNotificationUseCase } from '../../application/use-cases/notification.use-cases';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationRecipient } from '../../domain/value-objects/notification-recipient.vo';
import { DeliveryStatus } from '../../domain/value-objects/delivery-status.vo';

import { z } from 'zod';
import { SendNotificationDto } from '../dtos/notification.dto';

export class NotificationController {
  constructor(private readonly sendUseCase: SendNotificationUseCase) {}

  async send(
    request: FastifyRequest<{ Body: z.infer<typeof SendNotificationDto> }>,
    reply: FastifyReply,
  ) {
    const body = request.body;

    const recipient = new NotificationRecipient(
      body.recipientId,
      body.email,
      body.phoneNumber,
      body.pushToken,
      body.webhookUrl,
    );

    const notification = new Notification(
      body.id,
      body.category,
      body.priority,
      recipient,
      body.templateId,
      body.payloadData,
      DeliveryStatus.PENDING,
      new Date(),
    );

    try {
      await this.sendUseCase.execute(notification, body.templateRawBody, body.requestedChannels);
      return reply.code(202).send({ status: 'ACCEPTED', id: notification.id });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      return reply.code(400).send({ error: msg });
    }
  }
}
