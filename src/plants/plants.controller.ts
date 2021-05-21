import { Controller, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller('plantss')
export class PlantsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'Returning all plants'
    }
}
