import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post('notifications')
  async createNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
    return { notification };
  }
}
