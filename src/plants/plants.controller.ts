import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
// import { Request } from 'express';
import { PlantsDto } from './dto/plants.dto';
import { PlantsService } from './plants.service';
import { Plants } from './interfaces/plants.interface';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  findAall(): Plants[] {
    return this.plantsService.findAll();
  }

  @Get(':id')
  findOne(@Param() param): string {
    return `Moss ${param.id}`;
  }

  @Post()
  create(@Body() createPlantsDto: PlantsDto): string {
    return `Name: ${createPlantsDto.name} Fun Fact: ${createPlantsDto.description} Price: ${createPlantsDto.price}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updatePlantsDto: PlantsDto, @Param('id') id): string {
    return `Update ${id} - Name ${updatePlantsDto.name}`;
  }
}
