import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerContextMiddleware } from './logger-context.middleware';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [LoggerModule.forRoot()],
})
export class LoggerContextModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerContextMiddleware).forRoutes('*');
  }
}
