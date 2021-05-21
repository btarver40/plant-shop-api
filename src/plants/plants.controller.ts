import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('plants')
export class PlantsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'Returning all plants'
    }
}
