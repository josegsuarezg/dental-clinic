import { Module } from '@nestjs/common';
import { PatienceController } from './patience.controller';
import { PatienceService } from './patience.service';

@Module({
  controllers: [PatienceController],
  providers: [PatienceService]
})
export class PatienceModule {}
