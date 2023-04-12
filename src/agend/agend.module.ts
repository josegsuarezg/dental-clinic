import { Module } from '@nestjs/common';
import { AgendController } from './agend.controller';
import { AgendService } from './agend.service';

@Module({
  controllers: [AgendController],
  providers: [AgendService]
})
export class AgendModule {}
