import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { PatienceModule } from './patience/patience.module';
import { AgendModule } from './agend/agend.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/dentalClinicDB'), 
    PatienceModule, 
    AgendModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
