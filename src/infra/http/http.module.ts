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
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class HttpModule {}
