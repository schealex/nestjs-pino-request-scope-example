import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerContextModule } from './logger-context.module';

@Module({
  imports: [LoggerContextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
