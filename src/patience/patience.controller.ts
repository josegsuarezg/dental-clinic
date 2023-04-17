import { Controller, Get, Post, Put, Delete, Res, Body, Query, Param, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreatePatienceDTO} from 'src/dto/CreatePatience.dto';
import { Patience } from 'src/interfaces/patience.interface';
import { PatienceService } from './patience.service';
@Controller('patience')
export class PatienceController {
  
  constructor(private patienceService: PatienceService){}
  
  @Get('/')
  async getPatiences(@Res() res):Promise<Patience[]> {
    const patienceList = await this.patienceService.getPatiences()
    return res.status(HttpStatus.OK).json(patienceList);
  }
  
  @Get('/:patienceID')
  async getPatience(@Res() res, @Param('patienceID') patienceID: string): Promise<Patience> {
    const patienceFound = await this.patienceService.getPatience(patienceID)
    if(!patienceFound) throw new NotFoundException('Patience does not exist')
    return res.status(HttpStatus.OK).json(patienceFound);
  }
    
  @Post('/create')
  async createPatence(@Res() res, @Body() createPatienceDTO: CreatePatienceDTO): Promise<Patience>{
    const createdPatience = await this.patienceService.createPatience(createPatienceDTO)
    return res.status(HttpStatus.OK).json({ "responce": "Patience Created successfully",createdPatience})
  }
  
  @Put('/update/:patienceID')
  async updatePatence(@Res() res,@Param('patienceID') patienceID: string, @Body() createPatienceDTO: CreatePatienceDTO): Promise<Patience>{
    const patienceFound = await this.patienceService.getPatience(patienceID)
    if(!patienceFound) throw new NotFoundException('Patience does not exist')
    const updatedPatience = await this.patienceService.updatePatience(patienceID, createPatienceDTO)
    return res.status(HttpStatus.OK).json({"response": "Patience Updated successfully", updatedPatience})
  }
  
  @Delete('/delete/:patienceID')
  async deletePatence(@Res() res, @Param('patienceID') patienceID: string): Promise<Patience>{
    const patienceFound = await this.patienceService.getPatience(patienceID)
    if(!patienceFound) throw new NotFoundException('Patience does not exist')
    const deletedPatience = await this.patienceService.deletePatience(patienceID)
    return res.status(HttpStatus.OK).json({"response": "Patience Deleted successfully", deletedPatience})
  }
  
}
