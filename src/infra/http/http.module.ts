import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaNotificationsRepository } from '../database/prisma/repositories/prisma-notifications-repository';
import { NotificationsController } from './controllers/notiffcations.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    PrismaService,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class HttpModule {}
