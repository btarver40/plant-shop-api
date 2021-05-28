import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PlantsDto } from './dto/plants.dto';
import { PlantsService } from './plants.service';
import { Plant } from './interfaces/plant.interface';

@Controller('plants')
export class PlantsController {
  constructor(private readonly plantsService: PlantsService) {}

  @Get()
  findAll(): Promise<Plant[]> {
    return this.plantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Plant> {
    return this.plantsService.findOne(id);
  }

  @Post()
  create(@Body() createPlantsDto: PlantsDto): Promise<Plant> {
    return this.plantsService.create(createPlantsDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Plant> {
    return this.plantsService.delete(id);
  }

  @Put(':id')
  update(@Body() updatePlantsDto: PlantsDto, @Param('id') id): Promise<Plant> {
    return this.plantsService.update(id, updatePlantsDto);
  }
}
