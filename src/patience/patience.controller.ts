import { Controller, Get, Post, Put, Delete, Res, Body, Query, Param, HttpStatus } from '@nestjs/common';
import { createPactienceDTO } from 'src/dto/CreatePatience.dto';
import { Patience } from 'src/interfaces/patience.interface';

@Controller('patience')
export class PatienceController {
  
  @Post('/create')
  createPatence(@Res() res, @Body() createPactienceDTO: createPactienceDTO): Patience{
    return res.status(HttpStatus.OK).json({"response": "Patience created successfully"})
  }
  
}
