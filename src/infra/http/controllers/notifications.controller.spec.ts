import { TestingModule, Test } from '@nestjs/testing';
import { NotificationsRepository } from '../../../application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from '../../../infra/database/prisma/repositories/prisma-notifications-repository';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { NotificationsController } from './notiffcations.controller';
import { PrismaService } from '../../../infra/database/prisma/prisma.service';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

describe('AppController', () => {
  let appController: NotificationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
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
    }).compile();

    appController = app.get<NotificationsController>(NotificationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController).toBeDefined();
    });
  });
});
