import { Module } from '@nestjs/common';
import { AppService } from './infra/app.service';
import { DatabseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabseModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
