import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class LoggerContextMiddleware implements NestMiddleware {
  constructor(
    @InjectPinoLogger(LoggerContextMiddleware.name)
    private readonly logger: PinoLogger,
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.assign({ test: 'test' });
    next();
  }
}
