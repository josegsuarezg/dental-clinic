import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Patience } from 'src/interfaces/patience.interface';
import { CreatePatienceDTO } from 'src/dto/CreatePatience.dto';
@Injectable()
export class PatienceService {
  constructor(@InjectModel('Patience') private patienceModel: Model<Patience>){}
  
  async getPatiences(): Promise<Patience[]>{
    const patienceList = await this.patienceModel.find();
    return patienceList
  };
  
  async getPatience(patienceID: string): Promise<Patience>{
    const patienceFound = await this.patienceModel.findById(patienceID);
    return patienceFound
  };
  
  async createPatience(createPatienceDTO: CreatePatienceDTO):Promise<Patience>{
    const newPatience = new this.patienceModel(createPatienceDTO);
    return await newPatience.save();
  };
  
  async updatePatience(patienceID: string, createPatienceDTO: CreatePatienceDTO): Promise<Patience>{
    const updatedPatience = await this.patienceModel.findByIdAndUpdate(patienceID, createPatienceDTO, {new: true});
    return updatedPatience
  };
  
  async deletePatience(patienceID: string): Promise<Patience>{
    const deletedPatience = await this.patienceModel.findByIdAndDelete(patienceID);
    return deletedPatience;
  };
  
  
  
  
}
