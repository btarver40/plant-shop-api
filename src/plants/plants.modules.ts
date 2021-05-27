import { Module } from '@nestjs/common';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';
// import { PurchaseController } from './purchase/purchase.controller';
// import { DetailsController } from './details/details.controller';
// import { DetailsModule } from './details/details.module';

@Module({
  imports: [],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
