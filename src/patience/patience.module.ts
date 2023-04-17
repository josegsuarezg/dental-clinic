import { Module } from '@nestjs/common';
import { PatienceController } from './patience.controller';
import { PatienceService } from './patience.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatienceSchema } from 'src/schemas/patience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Patience', schema: PatienceSchema}
    ])
  ],
  controllers: [PatienceController],
  providers: [PatienceService]
})
export class PatienceModule {}
